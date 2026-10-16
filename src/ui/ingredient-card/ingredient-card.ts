import type {IIngredient} from "../../types/types.ts";
import {add, element, image} from "../dom.ts";

export function createIngredientCard(ingredient: IIngredient) {
    const card = element('div', 'ingredient-card');
    const icon = image(ingredient.icon, ingredient.name, 'ingredient-card__img');
    const wrap = element('div', 'ingredient-card__wrap');
    const title = element('h2', 'ingredient-card__title', ingredient.name.toString());
    const temperature = element('div', 'ingredient-card__temperature', ingredient.temperature.toString());
    const density = element('div', 'ingredient-card__density', ingredient.density.toString());
    const power = element('div', 'ingredient-card__power', ingredient.magicPower.toString());
    const stock = element('div', 'ingredient-card__power', ingredient.magicPower.toString());
    const button = element('button', 'ingredient-card__button', 'Add to cauldron');
    add(wrap, title, temperature, density, power, stock);
    add(card, icon, wrap, button);
    return card;
}
