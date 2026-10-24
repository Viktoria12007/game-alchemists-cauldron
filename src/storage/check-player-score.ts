import { getStorage } from './get-storage.ts';

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
