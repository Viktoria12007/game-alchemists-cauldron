import { element } from '../dom.ts';
import state from '../../state/game-state.ts';

export function createLives() {
  const elementLives = element('div', 'lives', `${'♥ '.repeat(state.lives).trim()}`);
  return elementLives;
}
