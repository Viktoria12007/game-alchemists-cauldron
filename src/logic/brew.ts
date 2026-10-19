import state from '../state/game-state.ts';
import { renderApp } from './render-app.ts';
import { recipeGenerator } from './recipe-generator.ts';
import { calculateCauldron } from './calculate-cauldron.ts';
import { settings } from '../data/settings.ts';

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
    state.timeLeft += 10;
    state.activeRecipe = recipeGenerator();
  } else {
    state.lives -= 1;
  }
  state.cauldronIngredients = [];
  renderApp();
}
