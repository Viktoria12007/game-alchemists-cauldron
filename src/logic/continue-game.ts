import { ingredientCatalogue } from '../data/ingredients.ts';
import { recipePool } from '../data/recipes.ts';
import state from '../state/game-state.ts';
import { clearSave, loadGame, saveGame } from '../storage/game-save.ts';
import { createLayout } from '../ui/layout/layout.ts';
import type { IIngredient } from '../types/types.ts';

export function continueGame() {
  const save = loadGame();
  if (!save) {
    createLayout();
    return;
  }

  const recipe = recipePool.find(({ id }) => id === save.activeRecipe.id);
  const ingredients: IIngredient[] = [];
  for (const savedIngredient of save.cauldronIngredients) {
    const ingredient = ingredientCatalogue.find(({ id }) => id === savedIngredient.id);
    if (!ingredient) {
      clearSave();
      createLayout();
      return;
    }
    ingredients.push(ingredient);
  }

  if (!recipe) {
    clearSave();
    createLayout();
    return;
  }

  state.difficulty = save.difficulty;
  state.score = save.score;
  state.timeLeft = save.timeLeft;
  state.lives = save.lives;
  state.activeRecipe = recipe;
  state.cauldronIngredients = ingredients;
  state.shelfStock = { ...save.shelfStock };
  state.startGame = true;
  state.reasonGameOver = '';
  state.status = 'playing';
  createLayout();
  state.status = 'paused';
  saveGame();
  createLayout();
}
