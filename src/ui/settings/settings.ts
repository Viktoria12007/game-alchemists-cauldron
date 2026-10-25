import { add, button, element } from '../dom.ts';
import { selectDifficulty } from '../../logic/select-difficulty.ts';

export function createSettings() {
  const settings = element('div', 'settings');
  const text = element('p', 'settings__text', 'Select the game difficulty level');
  const easy = button('Easy', 'button settings__easy');
  easy.addEventListener('click', () => selectDifficulty('easy'));
  const medium = button('Medium', 'button settings__medium');
  medium.addEventListener('click', () => selectDifficulty('medium'));
  const hard = button('Hard', 'button settings__hard');
  hard.addEventListener('click', () => selectDifficulty('hard'));
  add(settings, text, easy, medium, hard);
  return settings;
}
