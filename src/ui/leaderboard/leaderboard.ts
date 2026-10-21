import { add, button, element } from '../dom.ts';
import { getStorage } from '../../storage/get-storage.ts';
import { formatDate } from '../../logic/format-date.ts';
import { resume } from '../../logic/resume.ts';
import { renderConfirm } from '../../logic/render/render-confirm.ts';

export function createLeaderboard() {
  const elementLeaderboard = element('div', 'leaderboard');
  const title = element('h2', 'leaderboard__title', 'Leaderboard');
  const leaders = getStorage()?.leaderboard;
  let elementShowed;
  if (leaders && leaders.length > 0) {
    elementShowed = element('table', 'leaderboard__table');
    const header = element('thead', 'leaderboard__thead');
    const tr = element('tr', 'leaderboard__row');
    add(header, tr);
    const subtitles = ['Rank', 'Name', 'Score', 'Date'];
    for (const subtitle of subtitles) {
      const th = element('th', 'leaderboard__th', subtitle);
      add(tr, th);
    }
    add(elementShowed, header);
    const body = element('tbody', 'leaderboard__tbody');
    for (const [index, leader] of leaders.entries()) {
      const row = element('tr', 'leaderboard__row');
      const rank = element('td', 'leaderboard__cell', `${index + 1}`);
      const name = element('td', 'leaderboard__cell', leader.name);
      const score = element('td', 'leaderboard__cell', leader.score.toString());
      const date = element('td', 'leaderboard__cell', formatDate(leader.date));
      add(row, rank, name, score, date);
      body.append(row);
    }
    add(elementShowed, header, body);
  } else {
    elementShowed = element('div', 'leaderboard__list--empty', 'Leaderboard is empty!');
  }
  const actions = element('div', 'leaderboard__actions');
  const clearButton = button('Clear leaderboard', 'button leaderboard__button');
  clearButton.addEventListener('click', renderConfirm);
  const backButton = button('Back', 'button leaderboard__button');
  backButton.addEventListener('click', resume);
  add(actions, clearButton, backButton);
  add(elementLeaderboard, title, elementShowed, actions);
  return elementLeaderboard;
}
