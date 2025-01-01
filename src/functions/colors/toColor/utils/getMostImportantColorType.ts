import { ColorType } from '../types';

export const getMostImportantColorType = (colorType: ColorType[]): ColorType => {
  if (colorType.includes('rgb') && colorType[3] !== 'cmyk') return 'rgb';
  return 'cmyk';
};
