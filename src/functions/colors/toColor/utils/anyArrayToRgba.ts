import { Input, rgbArrayToObj } from '../../utility';
import { DEFAULT_RGB_ALPHA_COMPONENT } from '../constants';

export const anyArrayToRgba = (array: any[]) => {
  const { r, g, b } = rgbArrayToObj(array as Input);
  return { r, g, b, a: DEFAULT_RGB_ALPHA_COMPONENT };
};
