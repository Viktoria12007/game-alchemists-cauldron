import state from '../state/game-state.ts';
import { recipePool } from '../data/recipes.ts';

export function resetState() {
  state.status = 'playing';
  state.score = 0;
  state.lives = 0;
  state.activeRecipe = recipePool[0];
  state.cauldronIngredients = [];
  state.shelfStock = {};
  state.timeLeft = 0;
  state.startGame = false;
  state.reasonGameOver = '';
  state.closeModalWindow = () => {};
}
