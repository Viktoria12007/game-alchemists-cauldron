import { openModalWindow } from '../../ui/modal-window/modal-window.ts';
import { add, button, element } from '../../ui/dom.ts';
import { clearLeaderboard } from '../../storage/leaderboard-save.ts';
import {renderLeaderboard} from "./render-leaderboard.ts";

export function renderConfirm() {
  const main = document.querySelector('.game-main');
  if (!main) return;

  const elementConfirm = element('div', 'confirm');
  const text = element('p', 'confirm__text', 'Are you sure you want to clear the leaderboard?');
  const actions = element('div', 'confirm__actions');
  const yesButton = button('yes', 'button confirm__yes-button');
  const noButton = button('no', 'button confirm__no-button');
  add(actions, yesButton, noButton);
  add(elementConfirm, text, actions);
  const modalWindow = openModalWindow({ content: elementConfirm });
  yesButton.addEventListener('click', () => {
    modalWindow.close();
    clearLeaderboard();
    renderLeaderboard();
  });
  noButton.addEventListener('click', modalWindow.close);
  add(main, modalWindow.element);
}
