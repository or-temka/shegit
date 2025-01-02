import { ColorType } from '../types';
import { parseComponent } from './parseComponent';

export const getPossibleComponentByValue = (component: string): ColorType => {
  const parsedComponent = parseComponent(component);
  // if (parsedComponent <= 100 && parsedComponent >= 0) return 'cmyk';
  if (parsedComponent <= 255) return 'rgb';
  return 'rgb';
};
