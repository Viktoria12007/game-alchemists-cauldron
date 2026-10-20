import { createTimer } from '../../ui/timer/timer.ts';

export function renderTimer() {
  const timer = document.querySelector<HTMLDivElement>('.timer');
  if (!timer) throw new Error('Timer is missing');

  timer.replaceWith(createTimer());
}
