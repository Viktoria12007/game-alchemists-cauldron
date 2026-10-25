import { add, element } from '../dom.ts';
import { createIngredientCard } from '../ingredient-card/ingredient-card.ts';
import state from '../../state/game-state.ts';
import { getIngredientsByDifficulty } from '../../logic/get-ingredients-by-difficulty.ts';

export function createShelf() {
  const ingredientsList = element('ul', 'ingredients-list');
  for (const ingredient of getIngredientsByDifficulty(state.difficulty)) {
    const card = createIngredientCard(ingredient);
    const item = element('li', 'ingredients-list__item');
    add(item, card);
    add(ingredientsList, item);
  }
  return ingredientsList;
}
