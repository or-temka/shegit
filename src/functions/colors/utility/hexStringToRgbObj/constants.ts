import { RgbObj } from 'types';
import { HexStringToRgbObjDefault } from './types';

export const MIN_RGB_COMPONENT_VALUE = 0;
export const MAX_RGB_COMPONENT_VALUE = 255;
export const DEFAULT_RGB_COLOR_COMPONENT = MIN_RGB_COMPONENT_VALUE;
export const DEFAULT_RGB_ALPHA_COMPONENT = 1;

export const DEFAULT_HEX_COMPONENT = 0;

export const DEFAULT_RGB_OBJ: Required<RgbObj> = {
  r: DEFAULT_RGB_COLOR_COMPONENT,
  g: DEFAULT_RGB_COLOR_COMPONENT,
  b: DEFAULT_RGB_COLOR_COMPONENT,
};

export const DEFAULT_HEX_STRING = '#000000';

export const DEFAULT: HexStringToRgbObjDefault = {
  input: DEFAULT_HEX_STRING,
  return: DEFAULT_RGB_OBJ,
};
