type GameStatus = "menu" | "playing" | "paused" | "game-over";

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
}

interface IGameState {
    status: GameStatus;
    score: number;
    timeLeft: number;
    lives: number;
    activeRecipe: IRecipe;
    cauldronIngredients: IIngredient[];
    shelfStock: Record<string, number>; // ingredient id -> portions left
}

export type {
    IIngredient,
    IGameState,
    IRecipe
}
