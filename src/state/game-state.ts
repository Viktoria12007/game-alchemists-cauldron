import type { IGameState } from '../types/types.ts';
import { recipePool } from '../data/recipes.ts';
import { settings } from '../data/settings.ts';

const state: IGameState = {
  status: 'playing',
  score: 0,
  timeLeft: 0,
  lives: settings.lives,
  activeRecipe: recipePool[0],
  cauldronIngredients: [],
  shelfStock: {},
  startGame: true,
  closeModalWindow: () => {},
  reasonGameOver: '',
};

export default state;
