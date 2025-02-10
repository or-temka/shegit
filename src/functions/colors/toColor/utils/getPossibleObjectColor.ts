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
  const hsvChance = getChanceOfColor(['h', 's', 'v']);

  const colorChances = [rgbChance, cmykChance, hsvChance];
  const chancesMap: ColorType[] = ['rgb', 'cmyk', 'hsv'];
  const maxValue = Math.max(...colorChances);
  const maxIndex = colorChances.indexOf(maxValue);

  return chancesMap[maxIndex];
};
