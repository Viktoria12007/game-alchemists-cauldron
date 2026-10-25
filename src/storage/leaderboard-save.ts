import { compareLeaders } from '../logic/compare-leaders.ts';
import type { ILeader, ILeaderboardSave } from '../types/types.ts';

const SAVE_LEADERBOARD_KEY = 'alchemists-cauldron-leaderboard';

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
    localStorage[SAVE_LEADERBOARD_KEY] = JSON.stringify(storage);
  } catch (error) {
    console.error(error);
  }
}

export function getStorage(): ILeaderboardSave {
  const storage = { leaderboard: [] };
  try {
    if (Object.hasOwn(localStorage, SAVE_LEADERBOARD_KEY)) {
      return JSON.parse(localStorage[SAVE_LEADERBOARD_KEY]);
    }
    localStorage[SAVE_LEADERBOARD_KEY] = JSON.stringify(storage);
    return JSON.parse(localStorage[SAVE_LEADERBOARD_KEY]);
  } catch (error) {
    console.error(error);
    return storage;
  }
}

export function clearLeaderboard() {
  const storage = getStorage();
  storage.leaderboard = [];
  try {
    localStorage[SAVE_LEADERBOARD_KEY] = JSON.stringify(storage);
  } catch (error) {
    console.error(error);
  }
}

export function checkPlayerScore(finalScore: number) {
  if (finalScore === 0) {
    return false;
  }
  const storage = getStorage();

  const length = storage?.leaderboard.length;
  if (length && length > 0) {
    const minScore = storage.leaderboard[length - 1].score;
    return length < 10 ? finalScore >= minScore : finalScore > minScore;
  }
  return true;
}
