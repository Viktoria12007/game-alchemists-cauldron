import { add, element } from '../dom.ts';
import { createShelf } from '../shelf/shelf.ts';
import { createCauldron } from '../cauldron/cauldron.ts';
import { createControlPanel } from '../control-panel/control-panel.ts';
import { createBarsPanel } from '../bars-panel/bars-panel.ts';
import { createCurrentRecipe } from '../current-recipe/current-recipe.ts';

export function createLayout() {
  const main = element('main', 'container game-main');
  add(
    main,
    createShelf(),
    createCauldron(),
    createCurrentRecipe(),
    createBarsPanel(),
    createControlPanel(),
  );
  return main;
}
