import { add, button, element } from '../dom.ts';
import { formatTime } from '../../logic/format-time.ts';
import state from '../../state/game-state.ts';
import { pause } from '../../logic/pause.ts';

export function createTimer() {
  const elementTimer = element('div', 'timer');
  const elementPause = button('Pause', 'button timer__pause');
  elementPause.addEventListener('click', pause);
  const time = element(
    'div',
    `timer__time ${state.timeLeft <= 15 && state.timeLeft > 0 ? 'timer__time--danger' : ''}`,
    `Time: ${formatTime(state.timeLeft)}`,
  );
  add(elementTimer, elementPause, time);
  return elementTimer;
}
