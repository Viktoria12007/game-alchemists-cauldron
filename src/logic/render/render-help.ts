import state from '../../state/game-state.ts';
import { createLayout } from '../../ui/layout/layout.ts';

export function renderHelp() {
  state.status = 'help';
  createLayout();
}
