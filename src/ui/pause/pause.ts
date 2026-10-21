import { add, button, element } from '../dom.ts';
import { resume } from '../../logic/resume.ts';
import { playAgain } from '../../logic/play-again.ts';

export function createPause() {
  const pause = element('div', 'pause');
  const title = element('h2', 'pause__title', 'Game paused');
  const resumeButton = button('Resume', 'pause__resume-button');
  resumeButton.addEventListener('click', resume);
  const menuButton = button('Exit to menu', 'pause__menu-button');
  menuButton.addEventListener('click', playAgain);
  add(pause, title, resumeButton, menuButton);
  return pause;
}
