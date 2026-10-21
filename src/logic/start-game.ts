import state from '../state/game-state.ts';
import { createStock } from './create-stock.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { settings } from '../data/settings.ts';
import { startTimer } from './start-timer.ts';
import { createLayout } from '../ui/layout/layout.ts';

export function startGame() {
  state.activeRecipe = recipeGenerator();
  createStock(ingredientCatalogue);
  state.timeLeft = settings.maxSecondsTimer;
  startTimer();
  state.startGame = true;
  createLayout();
}
