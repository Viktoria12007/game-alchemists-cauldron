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
  const overlay = element('div', 'modal-window');
  const dialog = element('section', 'modal-window__dialog');
  const contentContainer = element('div', 'modal-window__content');
  let isClosed = false;

  overlay.setAttribute('role', 'presentation');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');

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

export function openModalWindow(options: IModalWindowOptions): IModalWindow {
  const modal = createModalWindow(options);
  return modal;
}

export type { IModalWindow, IModalWindowOptions };
