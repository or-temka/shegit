import { ColorType } from '../types';
import { getPossibleArrayColor } from './getPossibleArrayColor';

const isHexString = (str: string): boolean => {
  const actual = str.trim().replace('#', '');
  const isAppropriateLength = actual.length >= 3 && actual.length <= 6;
  const hasOnlyHexSymbols = /^[a-fA-F0-9]+$/.test(actual);
  return hasOnlyHexSymbols && isAppropriateLength;
};

export const getPossibleStringColor = (str: string): ColorType => {
  if (str.toLowerCase().includes('cmyk')) return 'cmyk';
  if (str.toLowerCase().includes('hsv')) return 'hsv';
  if (str.toLowerCase().includes('rgb') || str.toLowerCase().includes('rgba')) return 'rgb';
  if (str.toLowerCase().includes('#') || isHexString(str)) return 'hex';

  const actual = str.trim();
  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4) || [];

  return getPossibleArrayColor(match);
};
