import { add, button, element } from '../dom.ts';
import { resume } from '../../logic/resume.ts';
import { playAgain } from '../../logic/play-again.ts';

export function createPause() {
  const pause = element('div', 'pause');
  const title = element('h2', 'pause__title', 'Game paused');
  const actions = element('div', 'pause__actions');
  const resumeButton = button('Resume', 'button pause__resume-button');
  resumeButton.addEventListener('click', resume);
  const menuButton = button('Exit to menu', 'button pause__menu-button');
  menuButton.addEventListener('click', playAgain);
  add(actions, resumeButton, menuButton);
  add(pause, title, actions);
  return pause;
}
