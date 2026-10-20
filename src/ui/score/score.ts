import { element } from '../dom.ts';
import state from '../../state/game-state.ts';

export function createScore() {
  const elementScore = element('div', 'score', state.score.toString());
  return elementScore;
}
