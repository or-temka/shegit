import { FromColorType } from '../types';

export const getMostImportantColorType = (colorType: FromColorType[]): FromColorType => {
  if (colorType.includes('rgb') && colorType[3] !== 'cmyk') return 'rgb';
  return 'cmyk';
};
