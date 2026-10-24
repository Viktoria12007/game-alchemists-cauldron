import state from '../state/game-state.ts';
import type { Difficulty } from '../types/types.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { resetState } from './reset-state.ts';

export function selectDifficulty(difficulty: Difficulty) {
  state.difficulty = difficulty;
  state.closeModalWindow();
  resetState();
  createLayout();
}
