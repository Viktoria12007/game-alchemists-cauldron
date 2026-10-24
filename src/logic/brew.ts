import state from '../state/game-state.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { calculateCauldron } from './calculate-cauldron.ts';
import { settings } from '../data/settings.ts';
import { createLayout } from '../ui/layout/layout.ts';
import { gameOver } from './game-over.ts';

export function brew() {
  const values = calculateCauldron(state.cauldronIngredients);
  const isSuccess =
    values.temperature >= state.activeRecipe.temperature.min - settings.tolerance &&
    values.temperature <= state.activeRecipe.temperature.max + settings.tolerance &&
    values.density >= state.activeRecipe.density.min - settings.tolerance &&
    values.density <= state.activeRecipe.density.max + settings.tolerance &&
    values.magicPower >= state.activeRecipe.magicPower.min - settings.tolerance &&
    values.magicPower <= state.activeRecipe.magicPower.max + settings.tolerance;
  if (isSuccess) {
    state.score += 200;
    if (state.timeLeft + 10 > settings.maxSecondsTimer) {
      state.timeLeft = settings.maxSecondsTimer;
    } else {
      state.timeLeft += 10;
    }
    state.activeRecipe = recipeGenerator();
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
  createLayout();
}
