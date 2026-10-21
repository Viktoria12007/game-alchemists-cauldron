import state from '../state/game-state.ts';
import { startTimer } from './start-timer.ts';

export function resume() {
  state.status = 'playing';
  state.closeModalWindow();
  if (state.startGame) {
    startTimer();
  }
}
