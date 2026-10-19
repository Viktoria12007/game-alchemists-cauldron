import state from '../state/game-state.ts';
import { createStock } from './create-stock.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import { renderApp } from './render-app.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { settings } from '../data/settings.ts';

export function startGame() {
  state.status = 'playing';
  state.score = 0;
  state.timeLeft = settings.maxSecondsTimer;
  state.lives = 0;
  state.activeRecipe = recipeGenerator();
  state.cauldronIngredients = [];
  createStock(ingredientCatalogue);
  state.startGame = false;
  renderApp();
}
