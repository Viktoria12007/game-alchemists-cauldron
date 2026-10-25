import state from '../state/game-state.ts';
import { startTimer } from './start-timer.ts';
import { saveGame } from '../storage/game-save.ts';

export function resume() {
  state.status = 'playing';
  saveGame();
  state.closeModalWindow();
  if (state.startGame) {
    startTimer();
  }
}
