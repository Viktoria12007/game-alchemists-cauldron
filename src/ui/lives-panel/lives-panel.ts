import { add, element } from '../dom.ts';
import { createTimer } from '../timer/timer.ts';
import { createLives } from '../lives/lives.ts';
import { createScore } from '../score/score.ts';

export function createLivesPanel() {
  const panel = element('div', 'lives-panel');
  add(panel, createScore(), createTimer(), createLives());
  return panel;
}
