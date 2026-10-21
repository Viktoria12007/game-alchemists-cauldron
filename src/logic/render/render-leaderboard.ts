import state from '../../state/game-state.ts';
import { createLayout } from '../../ui/layout/layout.ts';

export function renderLeaderboard() {
  state.status = 'leaderboard';
  createLayout();
}
