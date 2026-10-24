import type { ILeader } from '../types/types.ts';

export function compareLeaders(a: ILeader, b: ILeader) {
  return b.score - a.score || a.date - b.date;
}
