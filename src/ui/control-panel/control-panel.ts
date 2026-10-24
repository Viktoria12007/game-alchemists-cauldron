import { add, button, element } from '../dom.ts';
import { startGame } from '../../logic/start-game.ts';
import { brew } from '../../logic/brew.ts';
import state from '../../state/game-state.ts';
import { renderLeaderboard } from '../../logic/render/render-leaderboard.ts';
import { renderSettings } from '../../logic/render/render-settings.ts';
import {renderHelp} from "../../logic/render/render-help.ts";

export function createControlPanel() {
  const controlPanel = element('div', 'control-panel');
  const actions = element('div', 'control-panel__actions');
  const helpButton = button('Help', 'button control-panel__button');
  helpButton.disabled = state.startGame;
  helpButton.addEventListener('click', renderHelp);
  const leaderboardButton = button('Leaderboard', 'button control-panel__button');
  leaderboardButton.addEventListener('click', renderLeaderboard);
  leaderboardButton.disabled = state.startGame;
  add(actions, helpButton, leaderboardButton);
  const startGameButton = button('Start game', 'main-button');
  startGameButton.addEventListener('click', startGame);
  startGameButton.dataset.visible = `${!state.startGame}`;
  const brewButton = button('Brew', 'main-button');
  brewButton.addEventListener('click', brew);
  brewButton.dataset.visible = `${state.startGame}`;
  brewButton.disabled = state.cauldronIngredients.length === 0;
  const settingsButton = button('Settings', 'button control-panel__button');
  settingsButton.addEventListener('click', renderSettings);
  settingsButton.disabled = state.startGame;
  add(controlPanel, actions, startGameButton, brewButton, settingsButton);
  return controlPanel;
}
