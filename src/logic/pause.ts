import state from '../state/game-state.ts';
import { createLayout } from '../ui/layout/layout.ts';

export function pause() {
  if (state.status !== 'playing') {
    return;
  }

  state.status = 'paused';
  createLayout();
}
