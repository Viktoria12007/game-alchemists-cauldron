import state from '../state/game-state.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import type { IIngredient } from '../types/types.ts';

export function addIngredient(id: string) {
  if (!(
    state.cauldronIngredients &&
    state.cauldronIngredients.length < 4 &&
    state.shelfStock[id] > 0
  )) {
    return;
  }

  state.shelfStock[id] -= 1;
  state.cauldronIngredients.push(
    ingredientCatalogue.find((ingredient) => ingredient.id === id) as IIngredient,
  );
}
