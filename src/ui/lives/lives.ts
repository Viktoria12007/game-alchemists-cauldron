import { element } from '../dom.ts';
import state from '../../state/game-state.ts';
import { settings } from '../../data/settings.ts';

export function createLives() {
  const elementLives = element(
    'div',
    'lives',
    `${'♥ '.repeat(state.lives) + '♡ '.repeat(settings[state.difficulty].lives - state.lives)}`,
  );
  return elementLives;
}
