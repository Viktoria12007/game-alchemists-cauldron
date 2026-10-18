import { add, element } from '../dom.ts';
import { createShelf } from '../shelf/shelf.ts';
import { createCauldron } from '../cauldron/cauldron.ts';
import {createControlPanel} from "../control-panel/control-panel.ts";

export function createLayout() {
  const main = element('main', 'container game-main');
  add(
    main,
    createShelf(),
    createCauldron(),
    createControlPanel(),
  );
  return main;
}
