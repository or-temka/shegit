import { ColorType } from '../types';
import { getMostImportantColorType } from './getMostImportantColorType';

const parseComponent = (component: string): number => {
  const num = Number(component);
  return Number.isNaN(num) ? 0 : num;
};

const getPossibleComponent = (component: string): ColorType => {
  const parsedComponent = parseComponent(component);
  if (parsedComponent <= 100 && parsedComponent >= 0) return 'cmyk';
  if (parsedComponent <= 255) return 'rgb';
  return 'rgb';
};

export const getPossibleStringColor = (str: string): ColorType => {
  if (str.toLowerCase().includes('cmyk')) return 'cmyk';
  if (str.toLowerCase().includes('rgb') || str.toLowerCase().includes('rgba')) return 'rgb';

  const actual = str.trim();
  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4) || [];

  switch (match.length) {
    case 1:
      return getPossibleComponent(match[0]);

    case 2: {
      const possibleComponent1 = getPossibleComponent(match[0]);
      const possibleComponent2 = getPossibleComponent(match[1]);

      return getMostImportantColorType([possibleComponent1, possibleComponent2]);
    }

    case 3: {
      const possibleComponent1 = getPossibleComponent(match[0]);
      const possibleComponent2 = getPossibleComponent(match[1]);
      const possibleComponent3 = getPossibleComponent(match[2]);

      return getMostImportantColorType([
        possibleComponent1,
        possibleComponent2,
        possibleComponent3,
      ]);
    }

    case 4: {
      const possibleComponent1 = getPossibleComponent(match[0]);
      const possibleComponent2 = getPossibleComponent(match[1]);
      const possibleComponent3 = getPossibleComponent(match[2]);

      const component4 = parseComponent(match[3]);
      let possibleComponent4: ColorType = 'rgb';
      if (component4 > 1) possibleComponent4 = 'cmyk';

      return getMostImportantColorType([
        possibleComponent1,
        possibleComponent2,
        possibleComponent3,
        possibleComponent4,
      ]);
    }

    default:
      return 'rgb';
  }
};
