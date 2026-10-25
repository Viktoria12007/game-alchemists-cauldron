import state from '../state/game-state.ts';
import { recipePool } from '../data/recipes.ts';
import { clearSave } from '../storage/game-save.ts';

export function gameOver() {
  state.status = 'game-over';
  state.lives = 0;
  state.activeRecipe = recipePool[0];
  state.cauldronIngredients = [];
  state.shelfStock = {};
  state.timeLeft = 0;
  state.startGame = false;
  clearSave();
}
