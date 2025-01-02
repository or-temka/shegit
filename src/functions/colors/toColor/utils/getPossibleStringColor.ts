import { ColorType } from '../types';
import { getPossibleArrayColor } from './getPossibleArrayColor';

export const getPossibleStringColor = (str: string): ColorType => {
  if (str.toLowerCase().includes('cmyk')) return 'cmyk';
  if (str.toLowerCase().includes('rgb') || str.toLowerCase().includes('rgba')) return 'rgb';

  const actual = str.trim();
  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4) || [];

  return getPossibleArrayColor(match);
};
