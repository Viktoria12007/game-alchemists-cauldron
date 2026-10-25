import { createLayout } from '../../ui/layout/layout.ts';
import { add, element } from '../../ui/dom.ts';

export function renderApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) throw new Error('Application root is missing');

  const main = element('main', 'container game-main');
  add(app, main);

  createLayout();
}
