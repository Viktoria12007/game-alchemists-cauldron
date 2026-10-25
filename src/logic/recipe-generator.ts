import { recipePool } from '../data/recipes.ts';

export function recipeGenerator() {
  return recipePool[Math.floor(Math.random() * 18)];
}
