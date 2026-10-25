# Alchemist's Cauldron

**Alchemist's Cauldron** is a browser-based potion-brewing game. Combine ingredients in a cauldron, keep its properties within the target ranges shown by the current recipe, and brew as many successful potions as possible before time, lives, or ingredients run out.

**Live demo:** [play the game](https://viktoria12007.github.io/game-alchemists-cauldron/)

## Game goal

Each round gives the player a random potion recipe with target ranges for three cauldron properties:

- Temperature
- Density
- Magic Power

Ingredients change these values in different ways. Select ingredients from the shelf, watch the parameter bars, and press **Brew** when the mixture is close enough to every target range. A successful brew awards points, grants a small time bonus, and loads a new recipe. A failed brew costs one life.

The game ends when the timer reaches zero, all lives are lost, or the ingredient stock is empty.

## Implemented features

- Ingredient shelf with limited stock and a clickable cauldron
- Recipe cards and live parameter bars for Temperature, Density, and Magic Power
- Brewing validation, scoring, life loss, and time bonuses
- Countdown timer and game-over screen
- Pause behaviour when the browser tab becomes inactive
- Three difficulty levels: Easy, Medium, and Hard
- Browser local-storage save data with **Continue Game** support
- Persistent top-10 leaderboard with player name, score, date, and difficulty
- Help screen explaining the game rules and a worked brewing example

## How to play

1. Choose a difficulty in **Settings** and click **Start game**.
2. Read the active recipe and its target values.
3. Click ingredient cards on the shelf to add portions to the cauldron. Each card shows the remaining stock.
4. Use the parameter bars to compare the current mixture with the highlighted target zones.
5. Click **Brew** to validate the mixture.
6. Repeat until the round ends. Enter a name at game over to save a qualifying score to the leaderboard.

The active game can be resumed after a page reload with **Continue Game**. The game is also paused automatically when the page is hidden.

## Run locally

### Requirements

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Commands

```bash
npm install
npm run dev
```

Vite will print a local URL (normally `http://localhost:5173`) to open in a browser.

Other useful commands:

```bash
npm run build       # type-check and create a production build
npm run preview     # preview the production build
npm run lint:check  # run ESLint without applying changes
npm run format:check # check Prettier formatting
```

## Project structure

```text
src/
|- assets/      # images and fonts
|- data/        # ingredients, recipes, and difficulty settings
|- logic/       # game rules, state transitions, and rendering helpers
|- state/       # shared game state
|- storage/     # local-storage saves and leaderboard data
|- styles/      # global styles and variables
|- types/       # TypeScript interfaces and types
`- ui/          # UI components and component styles
```

## Task scope

This project was completed for the [Rolling Scopes School "Alchemist's Cauldron" task](https://github.com/rolling-scopes-school/qualifying-stage/blob/main/tasks/game-alchemists-cauldron/README.md). The task is organised around the following feature groups:

- Core gameplay: ingredient selection, cauldron calculations, recipes, brewing, timer, lives, pause, and leaderboard
- Quality and delivery: repository setup, project structure, TypeScript, Vite, ESLint, Prettier, and Husky
- Extended gameplay: difficulty selection plus automatic saving and game continuation
