import {
  NodeOrElement,
  ElementData,
  ElementPath,
  Selectors,
  ElementMapper,
  getArrayItemAtIndex,
  FocusableElement,
} from './index';

function isElementVisibleOnScreen(element?: NodeOrElement) {
  if (!element || !(element as HTMLElement).getBoundingClientRect) {
    return false;
  }
  const rect = (element as HTMLElement).getBoundingClientRect();
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.right > 0 &&
    rect.bottom > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

const untrackedElementData: ElementData = {
  type: 'untracked',
  index: -1,
  element: undefined,
};

function addMappedElements(path: ElementPath, selectors: Selectors) {
  const targetData = getArrayItemAtIndex(path, -1);
  const element = targetData && targetData.element;
  if (!element) {
    return;
  }
  const containers =
    selectors.containerElements && selectors.containerElements(element, path).filter(isElementVisibleOnScreen);
  if (containers && containers.length) {
    const childContainers: ElementData[] = containers.map((container, elementIndex) => {
      return {
        element: container,
        type: 'container',
        index: elementIndex,
      };
    });
    if (childContainers.length) {
      targetData.containerElements = childContainers;
      childContainers.forEach((data) => {
        addMappedElements([...path, data], selectors);
      });
    }
  }

  const focusableElements = selectors.focusableElements(element, path).filter(isElementVisibleOnScreen);
  const focusable: ElementData[] = focusableElements.map((focusableElement, elementIndex) => {
    return {
      element: focusableElement,
      index: elementIndex,
      type: 'focusable',
    };
  });
  if (focusable.length) {
    targetData.focusableElements = focusable;
  }
}

function mapAllElements(root: HTMLElement, selectors: Selectors) {
  const rootData: ElementData = {
    type: 'root',
    element: root,
    index: 0,
  };
  addMappedElements([rootData], selectors);
  return rootData;
}

function disposeData(elementData: ElementData | null) {
  /* eslint-disable no-param-reassign */
  if (!elementData) {
    return;
  }
  elementData.element = undefined;
  if (elementData.containerElements) {
    elementData.containerElements.forEach(disposeData);
    elementData.containerElements = undefined;
  }
  if (elementData.focusableElements) {
    elementData.focusableElements.forEach(disposeData);
    elementData.focusableElements = undefined;
  }
  /* eslint-enable no-param-reassign */
}

export function returnValidElementData(data?: ElementData | null) {
  return data && data.index > -1 && !!data.element ? data : null;
}

export function isValidPath(elementPath: ElementPath): boolean {
  return !!returnValidElementData(getArrayItemAtIndex(elementPath, -1));
}

function isChild(parent: HTMLElement, assumedChildren: Array<NodeOrElement | null | undefined>) {
  return assumedChildren.some((child) => {
    return child && parent.contains(child as Node);
  });
}

function findElementPath(searchPath: ElementPath, target: HTMLElement): ElementPath {
  const startPoint = getArrayItemAtIndex(searchPath, -1);
  if (!startPoint || !startPoint.element || !isChild(startPoint.element, [target])) {
    return [{ ...untrackedElementData }];
  }
  const predicate = (data: ElementData) => data.element === target;
  if (startPoint.focusableElements) {
    const hit = startPoint.focusableElements.find(predicate);
    if (hit) {
      return [...searchPath, hit];
    }
  }
  if (startPoint.containerElements) {
    const hit = startPoint.containerElements.find(predicate);
    if (hit) {
      return [...searchPath, hit];
    }
    let foundPath: ElementPath | null = null;
    startPoint.containerElements.some((data) => {
      const results = findElementPath([...searchPath, data], target);
      const endResult = getArrayItemAtIndex(results, -1);
      if (endResult && endResult.element === target) {
        foundPath = results;
        return true;
      }
      return false;
    });
    return foundPath || [{ ...untrackedElementData }];
  }
  return [{ ...untrackedElementData }];
}

export function createElementMapper(root: HTMLElement, selectors: Selectors): ElementMapper {
  let rootData: ElementData | null = null;

  const getPath = (element: HTMLElement) => {
    if (!rootData) {
      return null;
    }
    const path = findElementPath([rootData], element);
    const data = getArrayItemAtIndex(path, -1);
    if (!data || data.index === -1) {
      return null;
    }
    return path;
  };

  const collectDeepestFocusable = (parent: ElementData) => {
    if (parent.containerElements) {
      return parent.containerElements.reduce((currentList, container) => {
        if (!container.focusableElements) {
          return currentList;
        }
        return [...currentList, ...container.focusableElements];
      }, [] as ElementData[]);
    }
    if (parent.focusableElements) {
      return parent.focusableElements;
    }
    return [];
  };

  const getPathToContainerByIndexes = (indexes: number[]): ElementPath => {
    // first index is always 0 and pointing to the root,
    // so root must exists as first childContainers
    let currentParent: ElementData | undefined = {
      ...untrackedElementData,
      containerElements: rootData ? [rootData] : undefined,
    };
    let notFound = false;
    if (!indexes.length) {
      return [untrackedElementData];
    }
    return indexes.map((index) => {
      if (notFound || !currentParent) {
        return untrackedElementData;
      }
      const containerCount = currentParent.containerElements ? currentParent.containerElements.length : 0;
      const adjustedIndex = index < 0 ? containerCount + index : index;
      const target = currentParent.containerElements && currentParent.containerElements[adjustedIndex];
      if (!target || target.index !== adjustedIndex) {
        notFound = true;
        return untrackedElementData;
      }
      currentParent = target;
      return target;
    });
  };

  const getPathToFocusableByIndexes = (indexes: number[]): ElementPath | null => {
    if (!indexes.length) {
      return null;
    }
    const copy = [...indexes];
    const last = copy.pop() as number;
    const parentPath = getPathToContainerByIndexes(copy);
    const parent = returnValidElementData(getArrayItemAtIndex(parentPath, -1));
    if (!parent) {
      return null;
    }
    const focusableCount = parent.focusableElements ? parent.focusableElements.length : 0;
    const adjustedIndex = last < 0 ? focusableCount + last : last;
    const focusable = returnValidElementData(parent.focusableElements && parent.focusableElements[adjustedIndex]);
    if (focusable && focusable.index === adjustedIndex) {
      parentPath.push(focusable);
      return parentPath;
    }
    return null;
  };

  const getRelatedFocusableElements = (container: ElementData): FocusableElement[] => {
    const list = collectDeepestFocusable(container);
    return list.map((data) => data.element).filter((el) => !!el) as FocusableElement[];
  };

  return {
    getPath,
    getPathToFocusableByIndexes,
    getPathToContainerByIndexes,
    getRelatedFocusableElements,
    dispose: () => {
      disposeData(rootData);
    },
    refresh: () => {
      disposeData(rootData);
      rootData = mapAllElements(root, selectors);
    },
    getRootData: () => rootData,
  };
}
