import { add, button, element } from '../dom.ts';
import state from '../../state/game-state.ts';
import { playAgain } from '../../logic/play-again.ts';
import { checkPlayerScore } from '../../storage/check-player-score.ts';
import { submitScore } from '../../logic/submit-score.ts';

export function createGameOver() {
  const gameOver = element('div', 'game-over');
  const title = element('h2', 'game-over__title', 'Game Over');
  const reason = element('p', 'game-over__reason', state.reasonGameOver);
  const subtitle = element('p', 'game-over__subtitle', 'Final score:');
  const score = element('p', 'game-over__score', state.score.toString());

  let form;
  if (checkPlayerScore(state.score)) {
    form = element('form', 'game-over__form');
    const label = element('label', 'game-over__label', 'Enter your name (2-15 chars):');
    label.setAttribute('for', 'username');
    const input = element('input', 'game-over__input');
    input.id = 'username';
    input.type = 'text';
    input.placeholder = 'Alchemist name';
    input.minLength = 2;
    input.maxLength = 15;
    input.required = true;
    input.pattern = '[a-zA-Z0-9 _-]{2,15}';
    const mainButton = button('Submit score', 'button game-over__button');
    mainButton.type = 'submit';
    form.addEventListener('submit', (event) => {
      if (input.checkValidity()) {
        submitScore(event, input.value);
      }
    });
    add(form, label, input, mainButton);
  }

  const secondaryButton = button('Play again', 'button game-over__button');
  secondaryButton.type = 'button';
  secondaryButton.addEventListener('click', playAgain);
  add(gameOver, title, reason, subtitle, score, form, secondaryButton);
  return gameOver;
}
