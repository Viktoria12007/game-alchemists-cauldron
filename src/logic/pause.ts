import state from '../state/game-state.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { saveGame } from '../storage/game-save.ts';

export function pause() {
  if (state.status !== 'playing' || !state.startGame) {
    return;
  }

  state.status = 'paused';
  saveGame();
  createLayout();
}
