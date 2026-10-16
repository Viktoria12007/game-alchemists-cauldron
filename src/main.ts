import './styles/main.scss';
import { createLayout } from './ui/layout/layout.ts';
import { add } from './ui/dom.ts';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Application root is missing');

add(app, createLayout());
