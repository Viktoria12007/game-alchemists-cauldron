import type { IStorage } from '../types/types.ts';

export function getStorage(): IStorage {
  const storage = { leaderboard: [] };
  try {
    if (localStorage['alchemists-cauldron']) {
      return JSON.parse(localStorage['alchemists-cauldron']);
    }
    localStorage['alchemists-cauldron'] = JSON.stringify(storage);
    return JSON.parse(localStorage['alchemists-cauldron']);
  } catch (error) {
    console.error(error);
    return storage;
  }
}
