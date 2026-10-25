import { resetState } from './reset-state.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { clearSave } from '../storage/game-save.ts';
import state from '../state/game-state.ts';

export function playAgain() {
  state.closeModalWindow();
  clearSave();
  resetState();
  createLayout();
}
