import { colorTypeToMapping } from '../constants';
import { ColorType, To } from '../types';

export const isMappedColorTypeTo = (to: To, colorType: ColorType): boolean => {
  const toMapped = colorTypeToMapping[colorType];
  return toMapped.includes(to);
};
