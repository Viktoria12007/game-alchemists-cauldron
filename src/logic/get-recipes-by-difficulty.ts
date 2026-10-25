import { recipePool } from '../data/recipes.ts';
import type { Difficulty } from '../types/types.ts';

export function getRecipesByDifficulty(difficulty: Difficulty) {
  return recipePool.filter((recipe) => recipe.difficulty === difficulty);
}
