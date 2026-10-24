import { getStorage } from './get-storage.ts';
import state from '../state/game-state.ts';
import { createLayout } from '../ui/layout/layout.ts';

export function clearLeaderboard() {
  const storage = getStorage();
  storage.leaderboard = [];
  try {
    localStorage['alchemists-cauldron'] = JSON.stringify(storage);
  } catch (error) {
    console.error(error);
  }
  state.status = 'leaderboard';
  createLayout();
}
