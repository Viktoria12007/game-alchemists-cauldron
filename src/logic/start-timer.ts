import state from '../state/game-state.ts';
import { renderTimer } from './render/render-timer.ts';
import { renderApp } from './render/render-app.ts';

export function startTimer() {
  const endTime = Date.now() + state.timeLeft * 1000;
  const timer = setInterval(() => {
    if (timer && state.timeLeft <= 0) {
      if (!state.reasonGameOver) {
        state.reasonGameOver = 'The timer has expired!';
      }
      state.status = 'game-over';
        clearInterval(timer);
      renderApp();
      return;
    }
    state.timeLeft = Math.floor((endTime - Date.now()) / 1000);
    renderTimer();
  }, 1000);
}
