import { ColorType } from '../types';

export const getPossibleObjectColor = (obj: Object): ColorType => {
  const getChanceOfColor = (keysToCheck: string[]) => {
    const matchedKeys = keysToCheck.filter((key) => key in obj);
    const count = matchedKeys.length;
    const chance = count / keysToCheck.length;
    return chance;
  };

  const rgbChance = getChanceOfColor(['r', 'g', 'b', 'a']);
  const cmykChance = getChanceOfColor(['c', 'm', 'y', 'k']);

  return rgbChance >= cmykChance ? 'rgb' : 'cmyk';
};
