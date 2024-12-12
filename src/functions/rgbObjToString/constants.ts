import { RgbObjToStringDefault } from './types';

export const DEFAULT_COLOR_COMPONENT = 0;

export const DEFAULT: RgbObjToStringDefault = {
  input: { r: DEFAULT_COLOR_COMPONENT, g: DEFAULT_COLOR_COMPONENT, b: DEFAULT_COLOR_COMPONENT },
  return: `rgb(${DEFAULT_COLOR_COMPONENT}, ${DEFAULT_COLOR_COMPONENT}, ${DEFAULT_COLOR_COMPONENT})`,
};
