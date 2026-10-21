import { resetState } from './reset-state.ts';
import { createLayout } from '../ui/layout/layout.ts';

export function playAgain() {
  resetState();
  createLayout();
}
