import state from '../state/game-state.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { calculateCauldron } from './calculate-cauldron.ts';
import { settings } from '../data/settings.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { gameOver } from './game-over.ts';
import { getRecipesByDifficulty } from './get-recipes-by-difficulty.ts';
import { saveGame } from '../storage/game-save.ts';

export function brew() {
  const values = calculateCauldron(state.cauldronIngredients);
  const isSuccess =
    values.temperature >=
      state.activeRecipe.temperature.min - settings[state.difficulty].recipeTolerance &&
    values.temperature <=
      state.activeRecipe.temperature.max + settings[state.difficulty].recipeTolerance &&
    values.density >= state.activeRecipe.density.min - settings[state.difficulty].recipeTolerance &&
    values.density <= state.activeRecipe.density.max + settings[state.difficulty].recipeTolerance &&
    values.magicPower >=
      state.activeRecipe.magicPower.min - settings[state.difficulty].recipeTolerance &&
    values.magicPower <=
      state.activeRecipe.magicPower.max + settings[state.difficulty].recipeTolerance;
  if (isSuccess) {
    state.score += settings[state.difficulty].scorePerBrew;
    if (
      state.timeLeft + settings[state.difficulty].timeBonusPerBrew >
      settings[state.difficulty].startingTime
    ) {
      state.timeLeft = settings[state.difficulty].startingTime;
    } else {
      state.timeLeft += settings[state.difficulty].timeBonusPerBrew;
    }
    state.activeRecipe = recipeGenerator(getRecipesByDifficulty(state.difficulty));
  } else {
    state.lives -= 1;
    if (state.lives === 0) {
      state.reasonGameOver = 'Lives reach 0!';
      gameOver();
      return;
    }
  }

  if (state.status !== 'game-over') {
    const isEmptyStore = Object.values(state.shelfStock).every((value) => value === 0);
    if (isEmptyStore) {
      state.reasonGameOver = 'Out of ingredients!';
      gameOver();
      return;
    }
  }

  state.cauldronIngredients = [];
  saveGame();
  createLayout();
}
