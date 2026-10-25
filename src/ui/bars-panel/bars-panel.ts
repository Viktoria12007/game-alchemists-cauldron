import { calculateCauldron } from '../../logic/calculate-cauldron.ts';
import state from '../../state/game-state.ts';
import { add, element } from '../dom.ts';
import { createBar } from '../bar/bar.ts';

export function createBarsPanel() {
  const values = calculateCauldron(state.cauldronIngredients);
  const panel = element('div', 'bars-panel');
  panel.setAttribute('aria-label', 'Cauldron properties');

  add(
    panel,
    createBar({
      id: 'temperature',
      label: 'Temperature',
      value: values.temperature,
      target: state.activeRecipe.temperature,
      tone: 'temperature',
      icon: '♨',
    }),
    createBar({
      id: 'density',
      label: 'Density',
      value: values.density,
      target: state.activeRecipe.density,
      tone: 'density',
      icon: '♦',
    }),
    createBar({
      id: 'magic-power',
      label: 'Magic power',
      value: values.magicPower,
      target: state.activeRecipe.magicPower,
      tone: 'magic',
      icon: '✧',
    }),
  );

  return panel;
}
