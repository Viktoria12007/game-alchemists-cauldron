import type { IIngredient } from '../../types/types.ts';
import { add, button, element, image } from '../dom.ts';
import state from '../../state/game-state.ts';
import { addIngredient } from '../../logic/add-ingredient.ts';
import { settings } from '../../data/settings.ts';

export function createIngredientCard(ingredient: IIngredient) {
  const card = element('div', 'ingredient-card');
  const icon = image(ingredient.icon, ingredient.name, 'ingredient-card__img');
  const wrap = element('div', 'ingredient-card__wrap');
  const title = element('h2', 'ingredient-card__title', ingredient.name);
  const properties = element('div', 'ingredient-card__properties');
  const temperature = element('div', 'ingredient-card__temperature', `T${ingredient.temperature}`);
  const density = element('div', 'ingredient-card__density', `D${ingredient.density}`);
  const power = element('div', 'ingredient-card__power', `MP${ingredient.magicPower}`);
  add(properties, temperature, density, power);
  if (Object.hasOwn(state.shelfStock, ingredient.id)) {
    const stock = element(
      'div',
      'ingredient-card__stock',
      state.shelfStock[ingredient.id]?.toString(),
    );
    add(properties, stock);
  }
  const addButton = button('', 'ingredient-card__button');
  addButton.addEventListener('click', () => addIngredient(ingredient.id));
  addButton.disabled =
    state.shelfStock[ingredient.id] === 0 ||
    state.cauldronIngredients.length === settings[state.difficulty].maxIngredientsInCauldron;
  add(wrap, title, properties);
  add(card, icon, wrap, addButton);
  return card;
}
