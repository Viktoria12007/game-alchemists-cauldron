import state from '../state/game-state.ts';
import { createStock } from './create-stock.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { settings } from '../data/settings.ts';
import { startTimer } from './start-timer.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { getRecipesByDifficulty } from './get-recipes-by-difficulty.ts';
import { saveGame } from '../storage/game-save.ts';

export function startGame() {
  state.activeRecipe = recipeGenerator(getRecipesByDifficulty(state.difficulty));
  createStock(ingredientCatalogue);
  state.lives = settings[state.difficulty].lives;
  state.timeLeft = settings[state.difficulty].startingTime;
  state.startGame = true;
  saveGame();
  startTimer();
  createLayout();
}
