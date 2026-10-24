import { add, element } from '../dom.ts';
import { createShelf } from '../shelf/shelf.ts';
import { createCauldron } from '../cauldron/cauldron.ts';
import { createControlPanel } from '../control-panel/control-panel.ts';
import { createBarsPanel } from '../bars-panel/bars-panel.ts';
import { createCurrentRecipe } from '../current-recipe/current-recipe.ts';
import { createLivesPanel } from '../lives-panel/lives-panel.ts';
import { openModalWindow } from '../modal-window/modal-window.ts';
import state from '../../state/game-state.ts';
import { createGameOver } from '../game-over/game-over.ts';
import { createPause } from '../pause/pause.ts';
import { createLeaderboard } from '../leaderboard/leaderboard.ts';
import { createSettings } from '../settings/settings.ts';

export function createLayout() {
  const main = document.querySelector('.game-main');
  if (!main) return;

  switch (state.status) {
    case 'playing': {
      main.replaceChildren(
        createLivesPanel(),
        element('h1', 'game-title', 'Alchemist`s cauldron'),
        createShelf(),
        createCauldron(),
        createCurrentRecipe(),
        createBarsPanel(),
        createControlPanel(),
      );
      break;
    }
    case 'game-over': {
      const modalWindow = openModalWindow({ content: createGameOver() });
      state.closeModalWindow = modalWindow.close;
      add(main, modalWindow.element);
      break;
    }
    case 'paused': {
      const modalWindow = openModalWindow({ content: createPause() });
      state.closeModalWindow = modalWindow.close;
      add(main, modalWindow.element);
      break;
    }
    case 'leaderboard': {
      state.closeModalWindow();
      const modalWindow = openModalWindow({ content: createLeaderboard() });
      state.closeModalWindow = modalWindow.close;
      add(main, modalWindow.element);
      break;
    }
    case 'menu': {
      const modalWindow = openModalWindow({ content: createSettings() });
      state.closeModalWindow = modalWindow.close;
      add(main, modalWindow.element);
      break;
    }
    default: {
      return main;
    }
  }

  return main;
}
