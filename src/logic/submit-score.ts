import { addLeader } from '../storage/add-leader.ts';
import { renderLeaderboard } from './render/render-leaderboard.ts';
import state from '../state/game-state.ts';

export function submitScore(event: SubmitEvent, name: string) {
  event.preventDefault();
  const player = {
    id: crypto.randomUUID(),
    name: name,
    score: state.score,
    date: Date.now(),
  };
  addLeader(player);
  state.score = 0;
  renderLeaderboard();
}
