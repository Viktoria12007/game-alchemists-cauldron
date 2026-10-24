import type { IRecipe } from '../types/types.ts';

export function recipeGenerator(recipes: IRecipe[]) {
  return recipes[Math.floor(Math.random() * recipes.length)];
}
