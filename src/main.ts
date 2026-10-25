import './styles/main.scss';
import { renderApp } from './logic/render/render-app.ts';
import { pause } from './logic/pause.ts';

document.addEventListener('visibilitychange', () => {
  pause();
});
renderApp();
