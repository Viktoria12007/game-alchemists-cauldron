import { add, button, element } from "../dom.ts";
import {createShelf} from "../shelf/shelf.ts";
import {createCauldron} from "../cauldron/cauldron.ts";
import {createCurrentRecipe} from "../current-recipe/current-recipe.ts";
import state from "../../state/game-state.ts";

export function createLayout() {
    const main = element('main', 'container game-main');
    const startGameButton = button('Start game','start-game-button');
    add(main, createShelf(), createCauldron(), createCurrentRecipe(state.activeRecipe), startGameButton);
    return main;
}
