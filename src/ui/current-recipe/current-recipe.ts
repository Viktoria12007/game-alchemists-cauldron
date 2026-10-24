import { add, element } from '../dom.ts';
import state from '../../state/game-state.ts';
import { settings } from '../../data/settings.ts';

export function createCurrentRecipe() {
  const isFulled =
    state.cauldronIngredients.length === settings[state.difficulty].maxIngredientsInCauldron;
  const recipe = element('div', 'current-recipe');
  const leftPage = element('div', 'current-recipe__page current-recipe__page--left');
  const rightPage = element('div', 'current-recipe__page current-recipe__page--right');
  const subtitle = element('h3', 'current-recipe__sub-title', 'Current recipe');
  const title = element('h2', 'current-recipe__title', state.activeRecipe?.name);
  const temperature = element(
    'div',
    'current-recipe__property',
    `♨ Temp: ${state.activeRecipe?.temperature?.min} - ${state.activeRecipe?.temperature?.max}`,
  );
  const density = element(
    'div',
    'current-recipe__property',
    `♦ Density: ${state.activeRecipe?.density?.min} - ${state.activeRecipe?.density?.max}`,
  );
  const magic = element(
    'div',
    'current-recipe__property',
    `✧ Magic: ${state.activeRecipe?.magicPower?.min} - ${state.activeRecipe?.magicPower?.max}`,
  );
  const ingredients = element(
    'div',
    `current-recipe__property ${isFulled && 'current-recipe__property--highlighted'}`,
    `Ingredients: ${state.cauldronIngredients.length}/${settings[state.difficulty].maxIngredientsInCauldron}`,
  );
  add(leftPage, subtitle, title, ingredients);
  add(rightPage, temperature, density, magic);
  add(recipe, leftPage, rightPage);
  return recipe;
}
