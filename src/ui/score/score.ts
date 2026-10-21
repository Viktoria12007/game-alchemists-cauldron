import { element } from '../dom.ts';
import state from '../../state/game-state.ts';

export function createScore() {
  const elementScore = element('div', 'score', `Score: ${state.score}`);
  return elementScore;
}
