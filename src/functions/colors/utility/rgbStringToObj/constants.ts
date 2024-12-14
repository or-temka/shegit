import { RgbStringToObjDefault } from './types';

export const DEFAULT_COLOR_COMPONENT = 0;
export const DEFAULT_ALPHA_COMPONENT = 1;

export const DEFAULT: RgbStringToObjDefault = {
  input: `rgb(${DEFAULT_COLOR_COMPONENT}, ${DEFAULT_COLOR_COMPONENT}, ${DEFAULT_COLOR_COMPONENT})`,
  return: {
    r: DEFAULT_COLOR_COMPONENT,
    g: DEFAULT_COLOR_COMPONENT,
    b: DEFAULT_COLOR_COMPONENT,
    a: DEFAULT_ALPHA_COMPONENT,
  },
};
