import { add, element } from '../dom.ts';
import { ingredientCatalogue } from '../../data/ingredients.ts';
import { createIngredientCard } from '../ingredient-card/ingredient-card.ts';
import {amountShowedCards} from "../../data/constants.ts";

export function createShelf() {
  const ingredientsList = element('ul', 'ingredients-list');
  for (const ingredient of ingredientCatalogue.slice(0, amountShowedCards)) {
    const card = createIngredientCard(ingredient);
    const item = element('li', 'ingredients-list__item');
    add(item, card);
    add(ingredientsList, item);
  }
  return ingredientsList;
}
