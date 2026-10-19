import type { IIngredient } from '../types/types.ts';

export function calculateCauldron(ingredients: IIngredient[]) {
  const total = { temperature: 0, density: 0, magicPower: 0 };
  for (const ingredient of ingredients) {
    total.temperature += ingredient.temperature;
    total.density += ingredient.density;
    total.magicPower += ingredient.magicPower;
  }
  return total;
}
