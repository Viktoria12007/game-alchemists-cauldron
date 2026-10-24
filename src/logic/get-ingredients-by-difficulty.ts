import type { Difficulty } from '../types/types.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import { settings } from '../data/settings.ts';

export function getIngredientsByDifficulty(difficulty: Difficulty) {
  return ingredientCatalogue.slice(0, settings[difficulty].ingredientsOnShelf);
}
