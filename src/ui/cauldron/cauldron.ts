import { image } from '../dom.ts';
import cauldronImage from '../../assets/cauldron.png';

export function createCauldron() {
  const cauldron = image(cauldronImage, 'Cauldron', 'cauldron');
  return cauldron;
}
