import { addLeader } from '../storage/leaderboard-save.ts';
import { renderLeaderboard } from './render/render-leaderboard.ts';
import state from '../state/game-state.ts';

export function submitScore(name: string) {
  const player = {
    id: crypto.randomUUID(),
    name: name,
    score: state.score,
    date: Date.now(),
    difficulty: state.difficulty,
  };
  addLeader(player);
  state.score = 0;
  renderLeaderboard();
}
