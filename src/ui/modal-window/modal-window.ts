import { add, element } from '../dom.ts';

type ModalContent = Node | (() => Node);

interface IModalWindowOptions {
  content: ModalContent;
  title?: string;
  onClose?: () => void;
}

interface IModalWindow {
  element: HTMLElement;
  close: () => void;
}

function resolveContent(content: ModalContent) {
  return typeof content === 'function' ? content() : content;
}

export function createModalWindow({ content, title, onClose }: IModalWindowOptions): IModalWindow {
  const overlay = element('div', 'modal-window');
  const dialog = element('section', 'modal-window__dialog');
  const header = element('header', 'modal-window__header');
  const contentContainer = element('div', 'modal-window__content');
  let isClosed = false;

  overlay.setAttribute('role', 'presentation');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  if (title) {
    dialog.setAttribute('aria-label', title);
  }

  if (title) {
    add(header, element('h2', 'modal-window__title', title));
  }
  add(contentContainer, resolveContent(content));
  add(dialog, header, contentContainer);
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
