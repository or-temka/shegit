import { COLOR_TYPES } from '../constants';
import { ColorType } from '../types';

export const fromColorTypeIsCorrect = (colorType: unknown): colorType is ColorType => {
  if (typeof colorType !== 'string') return false;
  if (!COLOR_TYPES.includes(colorType as ColorType)) return false;

  return true;
};
