import { getStorage } from './get-storage.ts';
import { checkPlayerScore } from './check-player-score.ts';
import type { ILeader } from '../types/types.ts';
import { compareLeaders } from '../logic/compare-leaders.ts';

export function addLeader(leader: ILeader) {
  const storage = getStorage();

  if (checkPlayerScore(leader.score)) {
    storage.leaderboard.push(leader);
    storage.leaderboard.sort(compareLeaders);
    if (storage.leaderboard.length > 10) {
      storage.leaderboard = storage.leaderboard.slice(0, 10);
    }
  }
  try {
    localStorage['alchemists-cauldron'] = JSON.stringify(storage);
  } catch (error) {
    console.error(error);
  }
}
