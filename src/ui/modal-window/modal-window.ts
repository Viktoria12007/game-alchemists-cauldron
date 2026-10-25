import { add, element } from '../dom.ts';

type ModalContent = Node | (() => Node);

interface IModalWindowOptions {
  content: ModalContent;
  onClose?: () => void;
}

interface IModalWindow {
  element: HTMLElement;
  close: () => void;
}

function resolveContent(content: ModalContent) {
  return typeof content === 'function' ? content() : content;
}

export function createModalWindow({ content, onClose }: IModalWindowOptions): IModalWindow {
export function createModalWindow({
  content,
  onClose,
  size = 'default',
}: IModalWindowOptions): IModalWindow {
  const overlay = element('div', 'modal-window');
  const dialog = element('div', 'modal-window__dialog');
  const contentContainer = element('div', 'modal-window__content');
  let isClosed = false;

  overlay.setAttribute('role', 'presentation');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  if (size === 'wide') dialog.classList.add('modal-window__dialog--wide');

  add(contentContainer, resolveContent(content));
  add(dialog, contentContainer);
  add(overlay, dialog);

  const close = () => {
    if (isClosed) return;
    isClosed = true;
    overlay.remove();
    onClose?.();
  };

  return { element: overlay, close };
}
