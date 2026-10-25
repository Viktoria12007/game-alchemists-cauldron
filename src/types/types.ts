type Difficulty = 'easy' | 'medium' | 'hard';

type GameStatus = 'menu' | 'playing' | 'paused' | 'game-over' | 'leaderboard' | 'help';

interface IIngredient {
  id: string;
  name: string;
  icon: string;
  temperature: number;
  density: number;
  magicPower: number;
}

interface IRecipeRange {
  min: number;
  max: number;
}

interface IRecipe {
  id: string;
  name: string;
  temperature: IRecipeRange;
  density: IRecipeRange;
  magicPower: IRecipeRange;
  difficulty: Difficulty;
}

interface IGameState {
  status: GameStatus;
  score: number;
  timeLeft: number;
  lives: number;
  activeRecipe: IRecipe;
  cauldronIngredients: IIngredient[];
  shelfStock: Record<string, number>; // ingredient id -> portions left
  startGame: boolean;
  closeModalWindow: () => void;
  reasonGameOver: string;
  difficulty: Difficulty;
}

interface IBarRange {
  min: number;
  max: number;
}

interface IBarOptions {
  id: string;
  label: string;
  value: number;
  target: IBarRange;
  tone: 'temperature' | 'density' | 'magic';
  icon: string;
}

interface ILeader {
  id: string;
  name: string;
  score: number;
  date: number;
  difficulty: Difficulty;
}

interface IStorage {
  leaderboard: ILeader[];
}

interface IGameSave {
  difficulty: Difficulty;
  score: number;
  timeLeft: number;
  lives: number;
  activeRecipe: IRecipe;
  cauldronIngredients: IIngredient[];
  shelfStock: Record<string, number>;
  status: 'playing' | 'paused';
}

export type {
  Difficulty,
  IIngredient,
  IGameState,
  IRecipe,
  IBarRange,
  IBarOptions,
  ILeader,
  IStorage,
  IGameSave,
};
