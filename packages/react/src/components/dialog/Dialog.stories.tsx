import React, { useRef, useState } from 'react';

import { Button } from '../button/Button';
import { TextArea } from '../textarea/TextArea';
import { TextInput } from '../textInput/TextInput';
import { Dialog } from './Dialog';
import { IconAlertCircle, IconInfoCircle, IconPlusCircle, IconTrash } from '../../icons';

export default {
  component: Dialog,
  title: 'Components/Dialog',
  parameters: {
    controls: { expanded: true },
    loki: { skip: true },
  },
  args: {
    id: 'example-dialog',
    'aria-labelled-by': 'example-dialog-title',
    'aria-describedby': 'example-dialog-content',
  },
};

export const Default = (args) => {
  const dialogTargetElement = document.getElementById('root'); // Because of the story regression tests, we need to render the dialog into the root element
  const openButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  return (
    <>
      <Button ref={openButtonRef} onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        id={args.id}
        aria-labelledby={args['aria-labelledby']}
        aria-describedby={args['aria-describedby']}
        isOpen={open}
        focusAfterCloseRef={openButtonRef}
        targetElement={dialogTargetElement}
        close={close}
        closeButtonLabelText="Close"
      >
        <Dialog.Header
          id={args['aria-labelledby']}
          title="Add new item"
          iconLeft={<IconPlusCircle aria-hidden="true" />}
        />
        <Dialog.Content>
          <p id={args['aria-describedby']} className="text-body">
            Add a new item by filling the information below. All fields are mandatory.
          </p>
          <TextInput
            id="item-name"
            label="Item name"
            placeholder="E.g. Item 1"
            helperText="Item's name must be unique."
            required
          />
          <br />
          <TextArea
            id="item-description"
            label="Item description"
            placeholder="E.g. Item 1 is the first item of the system."
            required
          />
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button
            onClick={() => {
              // Add operations here
              close();
            }}
          >
            Add item
          </Button>
          <Button onClick={close} variant="secondary">
            Cancel
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

export const Confirmation = (args) => {
  const dialogTargetElement = document.getElementById('root'); // Because of the story regression tests, we need to render the dialog into the root element
  const openConfirmationButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean>(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button ref={openConfirmationButtonRef} onClick={() => setOpen(true)}>
        Open Confirmation Dialog
      </Button>
      <Dialog
        id={args.id}
        aria-labelledby={args['aria-labelledby']}
        aria-describedby={args['aria-describedby']}
        isOpen={open}
        focusAfterCloseRef={openConfirmationButtonRef}
        targetElement={dialogTargetElement}
      >
        <Dialog.Header
          id={args['aria-labelledby']}
          title="Confirm dialog"
          iconLeft={<IconAlertCircle aria-hidden="true" />}
        />
        <Dialog.Content>
          <p id={args['aria-describedby']} className="text-body">
            Are you sure you want to continue?
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button
            onClick={() => {
              // Add confirm operations here
              close();
            }}
          >
            Confirm
          </Button>
          <Button onClick={close} variant="secondary">
            Cancel
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

Confirmation.storyName = 'Confirmation';

Confirmation.args = {
  id: 'confirmation-dialog',
  'aria-labelledby': 'confirmation-dialog-title',
  'aria-describedby': 'confirmation-dialog-description',
};

export const Danger = (args) => {
  const dialogTargetElement = document.getElementById('root'); // Because of the story regression tests, we need to render the dialog into the root element
  const openDangerButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean>(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button variant="danger" ref={openDangerButtonRef} onClick={() => setOpen(true)}>
        Open Danger Dialog
      </Button>
      <Dialog
        variant="danger"
        id={args.id}
        aria-labelledby={args['aria-labelledby']}
        aria-describedby={args['aria-describedby']}
        isOpen={open}
        focusAfterCloseRef={openDangerButtonRef}
        targetElement={dialogTargetElement}
      >
        <Dialog.Header
          id={args['aria-labelledby']}
          title="Delete item"
          iconLeft={<IconAlertCircle aria-hidden="true" />}
        />
        <Dialog.Content>
          <p id={args['aria-describedby']} className="text-body">
            Are you sure you want to delete the item?
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button theme="black" variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button
            variant="danger"
            iconLeft={<IconTrash aria-hidden="true" />}
            onClick={() => {
              // Add confirm operations here
              close();
            }}
          >
            Delete
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

Danger.storyName = 'Danger';

Danger.args = {
  id: 'danger-dialog',
  'aria-labelledby': 'danger-dialog-title',
  'aria-describedby': 'danger-dialog-description',
};

export const ScrollableConfirmation = (args) => {
  const dialogTargetElement = document.getElementById('root'); // Because of the story regression tests, we need to render the dialog into the root element
  const openScrollableConfirmationButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean>(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button ref={openScrollableConfirmationButtonRef} onClick={() => setOpen(true)}>
        Open Scrollable Confirmation Dialog
      </Button>
      <Dialog
        id={args.id}
        style={{ width: '800px' }}
        aria-labelledby={args['aria-labelledby']}
        aria-describedby={args['aria-describedby']}
        isOpen={open}
        focusAfterCloseRef={openScrollableConfirmationButtonRef}
        targetElement={dialogTargetElement}
        scrollable
      >
        <Dialog.Header
          id={args['aria-labelledby']}
          title="Confirm dialog"
          iconLeft={<IconAlertCircle aria-hidden="true" />}
        />
        <Dialog.Content>
          <h3 id={args['aria-describedby']}>Are you sure you want to continue?</h3>
          <p className="text-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p className="text-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p className="text-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p className="text-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button
            onClick={() => {
              // Add confirm operations here
              close();
            }}
          >
            Confirm
          </Button>
          <Button onClick={close} variant="secondary">
            Cancel
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

ScrollableConfirmation.storyName = 'Scrollable confirmation';

ScrollableConfirmation.args = {
  id: 'confirmation-scrollable-dialog',
  'aria-labelledby': 'confirmation-scrollable-title',
  'aria-describedby': 'confirmation-scrollable-description',
};

export const ConfirmationWithTerms = (args) => {
  const dialogTargetElement = document.getElementById('root'); // Because of the story regression tests, we need to render the dialog into the root element
  const openConfirmationButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  const openTermsButtonRef = useRef(null);
  const closeTerms = () => setTermsOpen(false);
  const openTermsDialog = () => setTermsOpen(true);

  return (
    <>
      <Button ref={openConfirmationButtonRef} onClick={() => setOpen(true)}>
        Open Accept Terms Dialog
      </Button>
      <Dialog
        id={args.id}
        style={{ width: '800px' }}
        aria-labelledby={args['aria-labelledby']}
        aria-describedby={args['aria-describedby']}
        isOpen={open}
        focusAfterCloseRef={openConfirmationButtonRef}
        targetElement={dialogTargetElement}
      >
        <Dialog.Header
          id={args['aria-labelledby']}
          title="Accept terms dialog"
          iconLeft={<IconAlertCircle aria-hidden="true" />}
        />
        <Dialog.Content>
          <p id={args['aria-describedby']} className="text-body">
            Do you want to accept terms of the service?
            <br />
            <br />
            <Button
              variant="secondary"
              iconLeft={<IconInfoCircle aria-hidden="true" />}
              ref={openTermsButtonRef}
              onClick={() => openTermsDialog()}
            >
              Open service terms dialog
            </Button>
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button
            onClick={() => {
              // Add confirm operations here
              close();
            }}
          >
            Accept terms
          </Button>
          <Button onClick={close} variant="secondary">
            Cancel
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
      <Dialog
        id={args.termsId}
        aria-labelledby={args.termsLabelId}
        aria-describedby={args.termsDescriptionId}
        isOpen={termsOpen}
        focusAfterCloseRef={openTermsButtonRef}
        close={closeTerms}
        closeButtonLabelText="Close terms dialog"
        targetElement={dialogTargetElement}
      >
        <Dialog.Header id={args.termsLabelId} title="Service terms" />
        <Dialog.Content>
          <p id={args.termsDescriptionId} className="text-body">
            These are the terms of the service.
          </p>
          <p className="text-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button
            onClick={() => {
              closeTerms();
            }}
          >
            Close
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

ConfirmationWithTerms.storyName = 'Confirmation dialog with terms dialog';

ConfirmationWithTerms.parameters = {
  loki: { skip: true },
};

ConfirmationWithTerms.args = {
  id: 'confirmation-dialog',
  'aria-labelledby': 'confirmation-title',
  'aria-describedby': 'confirmation-description',
  termsId: 'terms-dialog',
  termsLabelId: 'terms-dialog-title',
  termsDescriptionId: 'terms-dialog-description',
};
