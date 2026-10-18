import state from '../state/game-state.ts';
import { createStock } from './create-stock.ts';
import { ingredientCatalogue } from '../data/ingredients.ts';
import { renderApp } from './render-app.ts';

export function startGame() {
  state.status = 'playing';
  state.score = 0;
  state.timeLeft = 0;
  state.lives = 0;
  state.cauldronIngredients = [];
  createStock(ingredientCatalogue);
  renderApp();
}
