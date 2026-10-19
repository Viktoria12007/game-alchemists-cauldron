import { add, element } from '../dom.ts';
import type { IBarOptions, IBarRange } from '../../types/types.ts';

const previousPositions = new Map<string, number>();

function getScale(value: number, target: IBarRange) {
  const lowest = Math.min(value, target.min);
  const highest = Math.max(value, target.max);

  if (lowest < 0) {
    const limit = Math.max(Math.abs(lowest), Math.abs(highest), 10);
    return { min: -limit * 1.15, max: limit * 1.15 };
  }

  return { min: 0, max: Math.max(highest * 1.15, 10) };
}

function toPercent(value: number, scale: IBarRange) {
  return Math.min(100, Math.max(0, ((value - scale.min) / (scale.max - scale.min)) * 100));
}

function getScaleValues(scale: IBarRange, target: IBarRange, currentValue: number) {
  const steps = 4;
  const values = Array.from(
    { length: steps + 1 },
    (_, index) => scale.min + ((scale.max - scale.min) * index) / steps,
  );

  if (scale.min < 0 && scale.max > 0) {
    values.push(0);
  }
  values.push(target.min, target.max, currentValue);

  return [...new Set(values.map((value) => Math.round(value)))].toSorted(
    (first, second) => first - second,
  );
}

export function createBar({ id, label, value, target, tone, icon }: IBarOptions) {
  const scale = getScale(value, target);
  const currentPosition = toPercent(value, scale);
  const targetStart = toPercent(target.min, scale);
  const targetEnd = toPercent(target.max, scale);
  const isInTarget = value >= target.min && value <= target.max;
  const oldPosition = previousPositions.get(id) ?? currentPosition;
  previousPositions.set(id, currentPosition);

  const bar = element('section', `bar bar--${tone}${isInTarget ? ' bar--success' : ''}`);
  bar.setAttribute('aria-label', `${label}: ${value}. Target: ${target.min} to ${target.max}`);

  const heading = element('div', 'bar__heading');
  const title = element('h3', 'bar__title', label);
  const iconElement = element('span', 'bar__icon', icon);
  add(heading, iconElement, title);

  const track = element('div', 'bar__track');
  const zeroLine = element('span', 'bar__zero-line');
  const targetZone = element('span', 'bar__target-zone');
  const marker = element('span', 'bar__marker');
  const scaleLabels = element('div', 'bar__scale');

  zeroLine.style.left = `${toPercent(0, scale)}%`;
  targetZone.style.left = `${targetStart}%`;
  targetZone.style.width = `${targetEnd - targetStart}%`;
  marker.style.left = `${oldPosition}%`;

  for (const scaleValue of getScaleValues(scale, target, value)) {
    const isTargetBoundary = scaleValue === target.min || scaleValue === target.max;
    const label = element(
      'span',
      `bar__scale-label${isTargetBoundary ? ' bar__scale-label--target' : ''}`,
      String(scaleValue),
    );
    label.style.left = `${toPercent(scaleValue, scale)}%`;
    add(scaleLabels, label);
  }

  add(track, zeroLine, targetZone, marker, scaleLabels);
  add(bar, heading, track);

  requestAnimationFrame(() => {
    marker.style.left = `${currentPosition}%`;
  });

  return bar;
}
