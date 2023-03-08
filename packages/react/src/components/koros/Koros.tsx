import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';

// import base styles
import '../../styles/base.css';

import classNames from '../../utils/classNames';
import styles from './Koros.module.css';

export type KorosType = 'basic' | 'beat' | 'pulse' | 'wave' | 'vibration' | 'calm';

type RotateDegrees = '45deg' | '90deg' | '135deg' | '180deg' | '225deg' | '270deg' | '315deg';

export type KorosProps = {
  /**
   * Whether to use dense variant
   * @default false
   */
  dense?: boolean;
  /**
   * Whether the component should be flipped horizontally
   */
  flipHorizontal?: boolean;
  /**
   * A property to rotate Koros
   */
  rotate?: RotateDegrees;
  /**
   * Koros type
   */
  type?: KorosType;
  /**
   * Additional class names to apply to component
   */
  className?: string;
  /**
   * Additional style properties to apply to component
   */
  style?: React.CSSProperties;
};

const getSVG = (dense: boolean, type: string, patternName: string): React.SVGProps<SVGElement> => {
  const transform = `scale(${dense ? 1 : 3})`;
  const patterns = {
    basic: <path transform={transform} d="m0,15v81h96v-81c-24,0-24-15-48-15s-24,15-48,15z" />,
    beat: (
      <path
        transform={transform}
        d="m0,63v33h96v-33c-12,0-16.2-12-16.2-12l-15.6-39s-4.2-12-16.2-12-16.2,12-16.2,12l-15.6,39s-4.2,12-16.2,12z"
      />
    ),
    pulse: <path transform={transform} d="m0,30v66h96v-66c-24,0-24-30-48-30s-24,30-48,30z" />,
    storm: <path transform={transform} d="m0,30v66h96v-66c-24,0-39-11.1-48-30-9,18.9-24,30-48,30z" />,
    wave: <polygon transform={transform} points="m0,0v96h96v-96l-48,48z" />,
    calm: <path transform={transform} d="m0,0v96h96v-96z" />,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">
      <defs>
        <pattern
          id={`${patternName}`}
          x="0"
          y="0"
          width={`${dense ? 32 : 96}`}
          height="96"
          patternUnits="userSpaceOnUse"
        >
          {patterns[type]}
        </pattern>
      </defs>
      <rect fill={`url(#${patternName})`} width="100%" height="85" style={{ shapeRendering: 'crispEdges' }} />
    </svg>
  );
};

// first number is default, second for dense
const waveHeights: Record<KorosType, [number, number]> = {
  basic: [14, 5],
  beat: [70, 24],
  pulse: [34, 12],
  wave: [35, 12],
  vibration: [54, 18],
  calm: [0, 0],
};

export const getShapeHeight = ({ dense = false, type = 'basic' }: Pick<KorosProps, 'dense' | 'type'>): number => {
  const waveData = waveHeights[type];
  const index = dense ? 1 : 0;
  return (waveData && waveData[index]) || 0;
};

export const Koros = ({
  dense = false,
  flipHorizontal = false,
  type = 'basic',
  rotate,
  className = '',
  style,
}: KorosProps) => {
  const patternName = `koros_${type}`;
  const [id] = useState(uniqueId(`${patternName}-`));
  const cssTransforms: string[] = [
    flipHorizontal && 'scaleY(-1) translateZ(0)',
    rotate && `rotate(${rotate}) translateZ(0)`,
  ].filter((t) => !!t);

  return (
    <div
      className={classNames(styles.koros, styles[type], rotate && styles.rotate, className)}
      style={{ ...style, ...(cssTransforms.length > 0 ? { transform: cssTransforms.join(' ') } : {}) }}
    >
      {getSVG(dense, type, id)}
    </div>
  );
};
