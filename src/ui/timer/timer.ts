import { element } from '../dom.ts';
import { formatTime } from '../../logic/format-time.ts';
import state from '../../state/game-state.ts';

export function createTimer() {
  const elementTimer = element(
    'div',
    `timer ${state.timeLeft <= 15 && state.timeLeft > 0 ? 'timer__danger' : ''}`,
    formatTime(state.timeLeft),
  );
  return elementTimer;
}
