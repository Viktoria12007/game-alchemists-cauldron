import type { IRecipe } from '../types/types.ts';

export const recipePool: IRecipe[] = [
  {
    id: 'moon-mist',
    name: 'Moon Mist',
    temperature: {
      min: 32,
      max: 42,
    },
    density: {
      min: 12,
      max: 22,
    },
    magicPower: {
      min: 17,
      max: 27,
    },
    difficulty: 'easy',
  },
  {
    id: 'root-bloom',
    name: 'Root Bloom',
    temperature: {
      min: 2,
      max: 12,
    },
    density: {
      min: 24,
      max: 34,
    },
    magicPower: {
      min: 15,
      max: 25,
    },
    difficulty: 'easy',
  },
  {
    id: 'frost-steam',
    name: 'Frost Steam',
    temperature: {
      min: 2,
      max: 12,
    },
    density: {
      min: 7,
      max: 17,
    },
    magicPower: {
      min: 19,
      max: 29,
    },
    difficulty: 'easy',
  },
  {
    id: 'quiet-swirl',
    name: 'Quiet Swirl',
    temperature: {
      min: -28,
      max: -18,
    },
    density: {
      min: 19,
      max: 29,
    },
    magicPower: {
      min: 17,
      max: 27,
    },
    difficulty: 'easy',
  },
  {
    id: 'bright-dew',
    name: 'Bright Dew',
    temperature: {
      min: 27,
      max: 37,
    },
    density: {
      min: 32,
      max: 42,
    },
    magicPower: {
      min: 25,
      max: 35,
    },
    difficulty: 'easy',
  },
  {
    id: 'snow-dust',
    name: 'Snow Dust',
    temperature: {
      min: -16,
      max: -6,
    },
    density: {
      min: 28,
      max: 38,
    },
    magicPower: {
      min: 29,
      max: 39,
    },
    difficulty: 'easy',
  },
  {
    id: 'acid-spark',
    name: 'Acid Spark',
    temperature: {
      min: 17,
      max: 27,
    },
    density: {
      min: 18,
      max: 28,
    },
    magicPower: {
      min: 29,
      max: 39,
    },
    difficulty: 'medium',
  },
  {
    id: 'void-ember',
    name: 'Void Ember',
    temperature: {
      min: 0,
      max: 10,
    },
    density: {
      min: 0,
      max: 10,
    },
    magicPower: {
      min: 45,
      max: 55,
    },
    difficulty: 'medium',
  },
  {
    id: 'heavy-acid',
    name: 'Heavy Acid',
    temperature: {
      min: 0,
      max: 10,
    },
    density: {
      min: 29,
      max: 39,
    },
    magicPower: {
      min: 25,
      max: 35,
    },
    difficulty: 'medium',
  },
  {
    id: 'frost-acid',
    name: 'Frost Acid',
    temperature: {
      min: -13,
      max: -3,
    },
    density: {
      min: 13,
      max: 23,
    },
    magicPower: {
      min: 31,
      max: 41,
    },
    difficulty: 'medium',
  },
  {
    id: 'dusty-void',
    name: 'Dusty Void',
    temperature: {
      min: -13,
      max: -3,
    },
    density: {
      min: 0,
      max: 10,
    },
    magicPower: {
      min: 47,
      max: 57,
    },
    difficulty: 'medium',
  },
  {
    id: 'dragon-void',
    name: 'Dragon Void',
    temperature: {
      min: 25,
      max: 35,
    },
    density: {
      min: 1,
      max: 11,
    },
    magicPower: {
      min: 55,
      max: 65,
    },
    difficulty: 'medium',
  },
  {
    id: 'rooted-night',
    name: 'Rooted Night',
    temperature: {
      min: -18,
      max: -8,
    },
    density: {
      min: 14,
      max: 24,
    },
    magicPower: {
      min: 55,
      max: 65,
    },
    difficulty: 'medium',
  },
  {
    id: 'phoenix-pulse',
    name: 'Phoenix Pulse',
    temperature: {
      min: 57,
      max: 67,
    },
    density: {
      min: 0,
      max: 10,
    },
    magicPower: {
      min: 37,
      max: 47,
    },
    difficulty: 'hard',
  },
  {
    id: 'slime-crown',
    name: 'Slime Crown',
    temperature: {
      min: -5,
      max: 5,
    },
    density: {
      min: 45,
      max: 55,
    },
    magicPower: {
      min: 3,
      max: 13,
    },
    difficulty: 'hard',
  },
  {
    id: 'void-flame',
    name: 'Void Flame',
    temperature: {
      min: 25,
      max: 35,
    },
    density: {
      min: 0,
      max: 10,
    },
    magicPower: {
      min: 60,
      max: 70,
    },
    difficulty: 'hard',
  },
  {
    id: 'acid-bog',
    name: 'Acid Bog',
    temperature: {
      min: 10,
      max: 20,
    },
    density: {
      min: 39,
      max: 49,
    },
    magicPower: {
      min: 17,
      max: 27,
    },
    difficulty: 'hard',
  },
  {
    id: 'frozen-ash',
    name: 'Frozen Ash',
    temperature: {
      min: 27,
      max: 37,
    },
    density: {
      min: 0,
      max: 10,
    },
    magicPower: {
      min: 39,
      max: 49,
    },
    difficulty: 'hard',
  },
  {
    id: 'triple-eclipse',
    name: 'Triple Eclipse',
    temperature: {
      min: -20,
      max: -10,
    },
    density: {
      min: 19,
      max: 29,
    },
    magicPower: {
      min: 60,
      max: 70,
    },
    difficulty: 'hard',
  },
  {
    id: 'ember-soup',
    name: 'Ember Soup',
    temperature: {
      min: 62,
      max: 72,
    },
    density: {
      min: 24,
      max: 34,
    },
    magicPower: {
      min: 37,
      max: 47,
    },
    difficulty: 'hard',
  },
];
