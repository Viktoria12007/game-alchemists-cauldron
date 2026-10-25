import { resetState } from './reset-state.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { clearSave } from '../storage/game-save.ts';

export function playAgain() {
  clearSave();
  resetState();
  createLayout();
}
