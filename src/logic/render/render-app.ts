import { createLayout } from '../../ui/layout/layout.ts';

export function renderApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) throw new Error('Application root is missing');

  app.replaceChildren(createLayout());
}
