import type {IIngredient} from "../types/types.ts";
import state from "../state/game-state.ts";

export function createStock(ingredients: IIngredient[]) {
    for (const ingredient of ingredients) {
        state.shelfStock[ingredient.id] = Math.floor(Math.random() * 14) + 2;
    }
}
