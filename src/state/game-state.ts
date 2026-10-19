import type { IGameState } from '../types/types.ts';
import { recipePool } from '../data/recipes.ts';

const state: IGameState = {
  status: 'playing',
  score: 0,
  timeLeft: 0,
  lives: 0,
  activeRecipe: recipePool[0],
  cauldronIngredients: [],
  shelfStock: {},
  startGame: true,
};

export default state;
