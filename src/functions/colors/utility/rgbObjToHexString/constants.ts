import { RgbaObj } from 'types';
import { RgbObjToCmykObjDefault } from './types';

export const MIN_RGB_COMPONENT_VALUE = 0;
export const MAX_RGB_COMPONENT_VALUE = 255;
export const DEFAULT_RGB_COLOR_COMPONENT = MIN_RGB_COMPONENT_VALUE;
export const DEFAULT_RGB_ALPHA_COMPONENT = 1;

export const DEFAULT_RGB_OBJ: Required<RgbaObj> = {
  r: DEFAULT_RGB_COLOR_COMPONENT,
  g: DEFAULT_RGB_COLOR_COMPONENT,
  b: DEFAULT_RGB_COLOR_COMPONENT,
  a: DEFAULT_RGB_ALPHA_COMPONENT,
};

export const DEFAULT_HEX_STRING = "#000000"

export const DEFAULT: RgbObjToCmykObjDefault = {
  input: DEFAULT_RGB_OBJ,
  return: DEFAULT_HEX_STRING,
};
