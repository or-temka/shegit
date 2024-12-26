import { rgbStringToObj } from '../../utility';

export const anyStringToRgba = (str: string) => {
  const { r, g, b, a = 1 } = rgbStringToObj(str);

  return { r, g, b, a };
};
