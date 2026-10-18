import { add, button, element } from '../dom.ts';
import { startGame } from '../../logic/start-game.ts';

export function createControlPanel() {
  const controlPanel = element('div', 'control-panel');
  const startGameButton = button('Start game', 'start-game-button');
  startGameButton.addEventListener('click', startGame);
  add(controlPanel, startGameButton);
  return controlPanel;
}
