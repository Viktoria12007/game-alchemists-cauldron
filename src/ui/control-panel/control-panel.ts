import { add, button, element } from '../dom.ts';
import { startGame } from '../../logic/start-game.ts';
import { brew } from '../../logic/brew.ts';
import state from '../../state/game-state.ts';
import { renderLeaderboard } from '../../logic/render/render-leaderboard.ts';

export function createControlPanel() {
  const controlPanel = element('div', 'control-panel');
  const leaderboardButton = button('Leaderboard', 'button control-panel__button');
  leaderboardButton.addEventListener('click', renderLeaderboard);
  const startGameButton = button('Start game', 'main-button');
  startGameButton.addEventListener('click', startGame);
  startGameButton.dataset.visible = `${!state.startGame}`;
  const brewButton = button('Brew', 'main-button');
  brewButton.addEventListener('click', brew);
  brewButton.dataset.visible = `${state.startGame}`;
  brewButton.disabled = state.cauldronIngredients.length === 0;
  const settingsButton = button('Settings', 'button control-panel__button');
  add(controlPanel, leaderboardButton, startGameButton, brewButton, settingsButton);
  return controlPanel;
}
