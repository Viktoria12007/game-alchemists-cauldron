import state from '../state/game-state.ts';
import { renderTimer } from './render/render-timer.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { gameOver } from './game-over.ts';

export function startTimer() {
  const endTime = Date.now() + state.timeLeft * 1000;
  const timer = setInterval(() => {
    if (state.status === 'paused' || state.status === 'leaderboard') {
      clearInterval(timer);
    }
    if (timer && state.timeLeft <= 0) {
      if (!state.reasonGameOver) {
        state.reasonGameOver = 'The timer has expired!';
      }
      clearInterval(timer);
      gameOver();
      createLayout();
      return;
    }
    state.timeLeft = Math.floor((endTime - Date.now()) / 1000);
    renderTimer();
  }, 1000);
}
