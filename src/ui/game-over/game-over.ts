import { add, button, element } from '../dom.ts';
import state from '../../state/game-state.ts';
import { playAgain } from '../../logic/play-again.ts';

export function createGameOver() {
  const gameOver = element('div', 'game-over');
  const title = element('h2', 'game-over__title', 'Game Over');
  const reason = element('p', 'game-over__reason', state.reasonGameOver);
  const subtitle = element('p', 'game-over__subtitle', 'Final score:');
  const score = element('p', 'game-over__score', state.score.toString());
  const form = element('form', 'game-over__form');
  const label = element('label', 'game-over__label', 'Enter your name (2-15 chars):');
  label.setAttribute('for', 'username');
  const input = element('input', 'game-over__input');
  input.id = 'username';
  input.type = 'text';
  input.placeholder = 'Alchemist name';
  input.minLength = 2;
  input.maxLength = 15;
  input.required = true;
  const actions = element('div', 'game-over__actions');
  const mainButton = button('Submit score', 'game-over__button');
  mainButton.type = 'submit';
  const secondaryButton = button('Play again', 'game-over__button');
  secondaryButton.type = 'button';
  secondaryButton.addEventListener('click', playAgain);
  add(actions, mainButton, secondaryButton);
  add(form, label, input, actions);
  add(gameOver, title, reason, subtitle, score, form);
  return gameOver;
}
