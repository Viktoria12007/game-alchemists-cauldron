import type { IIngredient } from '../../types/types.ts';
import {add, button, element, image} from '../dom.ts';
import state from "../../state/game-state.ts";
import {addIngredient} from "../../logic/add-ingredient.ts";
import {cauldronHolds} from "../../data/constants.ts";

export function createIngredientCard(ingredient: IIngredient) {
  const card = element('div', 'ingredient-card');
  const icon = image(ingredient.icon, ingredient.name, 'ingredient-card__img');
  const wrap = element('div', 'ingredient-card__wrap');
  const title = element('h2', 'ingredient-card__title', ingredient.name.toString());
    const properties = element('div', 'ingredient-card__properties');
    const temperature = element(
    'div',
    'ingredient-card__temperature',
    ingredient.temperature.toString(),
  );
  const density = element('div', 'ingredient-card__density', ingredient.density.toString());
  const power = element('div', 'ingredient-card__power', ingredient.magicPower.toString());
  const stock = element('div', 'ingredient-card__stock', state.shelfStock[ingredient.id]?.toString());
  add(properties, temperature, density, power, stock);
  const addButton = button('', 'ingredient-card__button');
  addButton.addEventListener('click', () => addIngredient(ingredient.id));
  addButton.disabled = state.shelfStock[ingredient.id] === 0 || state.cauldronIngredients.length === cauldronHolds;
  add(wrap, title, properties);
  add(card, icon, wrap, addButton);
  return card;
}
