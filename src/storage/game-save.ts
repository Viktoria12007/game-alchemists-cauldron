import { ingredientCatalogue } from '../data/ingredients.ts';
import { recipePool } from '../data/recipes.ts';
import { settings } from '../data/settings.ts';
import state from '../state/game-state.ts';
import type { Difficulty, IGameSave, IIngredient } from '../types/types.ts';

const SAVE_KEY = 'alchemists-cauldron-game-save';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isDifficulty(value: unknown): value is Difficulty {
  return ['easy', 'medium', 'hard'].includes(value as Difficulty);
}

function isNonNegativeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value) && (value as number) >= 0;
}

function isIngredientList(value: unknown, difficulty: Difficulty): value is IIngredient[] {
  return Array.isArray(value) && value.length <= settings[difficulty].maxIngredientsInCauldron
    ? value.every(
        (ingredient) =>
          isRecord(ingredient) &&
          typeof ingredient.id === 'string' &&
          ingredientCatalogue.some(({ id }) => id === ingredient.id),
      )
    : false;
}

function isValidStock(value: unknown): value is Record<string, number> {
  return isRecord(value) && Object.keys(value).length === ingredientCatalogue.length
    ? ingredientCatalogue.every(
        ({ id }) =>
          Object.hasOwn(value, id) && Number.isSafeInteger(value[id]) && (value[id] as number) >= 0,
      )
    : false;
}

export function isValidSave(data: unknown): data is IGameSave {
  if (!isRecord(data) || !isDifficulty(data.difficulty)) return false;

  const { difficulty } = data;
  const activeRecipe = data.activeRecipe;
  const isKnownRecipe =
    isRecord(activeRecipe) &&
    typeof activeRecipe.id === 'string' &&
    recipePool.some(
      ({ id, difficulty: recipeDifficulty }) =>
        id === activeRecipe.id && recipeDifficulty === difficulty,
    );

  return (
    isNonNegativeInteger(data.score) &&
    isNonNegativeInteger(data.timeLeft) &&
    data.timeLeft > 0 &&
    data.timeLeft <= settings[difficulty].startingTime &&
    isNonNegativeInteger(data.lives) &&
    data.lives > 0 &&
    data.lives <= settings[difficulty].lives &&
    isKnownRecipe &&
    isIngredientList(data.cauldronIngredients, difficulty) &&
    isValidStock(data.shelfStock) &&
    (data.status === 'playing' || data.status === 'paused')
  );
}

export function saveGame() {
  if (!state.startGame || (state.status !== 'playing' && state.status !== 'paused')) {
    return;
  }

  const save: IGameSave = {
    difficulty: state.difficulty,
    score: state.score,
    timeLeft: state.timeLeft,
    lives: state.lives,
    activeRecipe: state.activeRecipe,
    cauldronIngredients: state.cauldronIngredients,
    shelfStock: state.shelfStock,
    status: state.status,
  };

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch (error) {
    console.error(error);
  }
}

export function loadGame(): IGameSave | null {
  try {
    const rawSave = localStorage.getItem(SAVE_KEY);
    if (!rawSave) return null;

    const save: unknown = JSON.parse(rawSave);
    if (isValidSave(save)) return save;
  } catch (error) {
    console.error(error);
  }

  clearSave();
  return null;
}

export function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (error) {
    console.error(error);
  }
}
