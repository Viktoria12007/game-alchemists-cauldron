import { add, element } from '../dom.ts';
import type { IModalWindow, IModalWindowOptions, ModalContent } from '../../types/types.ts';

function resolveContent(content: ModalContent) {
  return typeof content === 'function' ? content() : content;
}

function lockPageScroll() {
  document.documentElement.classList.add('modal-window-open');
  document.body.classList.add('modal-window-open');
}

function unlockPageScroll() {
  const modalsWindows = document.querySelectorAll('.modal-window');
  if (modalsWindows.length > 0) return;

  document.documentElement.classList.remove('modal-window-open');
  document.body.classList.remove('modal-window-open');
}

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
  lockPageScroll();

  const close = () => {
    if (isClosed) return;
    isClosed = true;
    overlay.remove();
    unlockPageScroll();
    onClose?.();
  };

  return { element: overlay, close };
}
