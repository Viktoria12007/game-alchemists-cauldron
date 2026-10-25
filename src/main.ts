import './styles/main.scss';
import { renderApp } from './logic/render/render-app.ts';
import state from './state/game-state.ts';
import { createLayout } from './ui/layout/layout.ts';

document.addEventListener('visibilitychange', () => {
  if (state.status !== 'playing' || !state.startGame) {
    return;
  }

  state.status = 'paused';
  createLayout();
});
renderApp();
