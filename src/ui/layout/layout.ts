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

export function createLayout() {
  const main = element('main', 'container game-main');

  if (state.status === 'playing') {
    add(
      main,
      createLivesPanel(),
      createShelf(),
      createCauldron(),
      createCurrentRecipe(),
      createBarsPanel(),
      createControlPanel(),
    );
  } else if (state.status === 'game-over') {
    const modalWindow = openModalWindow({ content: createGameOver() });
    state.closeModalWindow = modalWindow.close;
    add(main, modalWindow.element);
  }

  return main;
}
