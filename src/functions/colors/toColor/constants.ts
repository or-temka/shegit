import { ColorTypeToMapping, Default } from './types';

export const MIN_CMYK_COMPONENT_VALUE = 0;
export const MAX_CMYK_COMPONENT_VALUE = 100;
export const DEFAULT_CMYK_COLOR_COMPONENT = MIN_CMYK_COMPONENT_VALUE;
export const DEFAULT_CMYK_KEY_COMPONENT = MAX_CMYK_COMPONENT_VALUE;

export const MIN_RGB_COMPONENT_VALUE = 0;
export const MAX_RGB_COMPONENT_VALUE = 255;
export const DEFAULT_RGB_COLOR_COMPONENT = MIN_RGB_COMPONENT_VALUE;
export const DEFAULT_RGB_ALPHA_COMPONENT = 1;

export const DEFAULT: Default = {
  input: [DEFAULT_RGB_COLOR_COMPONENT, DEFAULT_RGB_COLOR_COMPONENT, DEFAULT_RGB_COLOR_COMPONENT],
  return: {
    r: DEFAULT_RGB_COLOR_COMPONENT,
    g: DEFAULT_RGB_COLOR_COMPONENT,
    b: DEFAULT_RGB_COLOR_COMPONENT,
    a: DEFAULT_RGB_ALPHA_COMPONENT,
  },
};

export const colorTypeToMapping: ColorTypeToMapping = {
  rgb: ['object', 'rgb-object', 'rgb-array', 'rgb-string'],
  cmyk: ['cmyk-object', 'cmyk-array', 'cmyk-string'],
  hex: ['hex-string'],
};

export const DEFAULT_RGB_OBJECT = {
  r: DEFAULT_RGB_COLOR_COMPONENT,
  g: DEFAULT_RGB_COLOR_COMPONENT,
  b: DEFAULT_RGB_COLOR_COMPONENT,
  a: DEFAULT_RGB_ALPHA_COMPONENT,
};

export const DEFAULT_CMYK_OBJECT = {
  c: DEFAULT_CMYK_COLOR_COMPONENT,
  m: DEFAULT_CMYK_COLOR_COMPONENT,
  y: DEFAULT_CMYK_COLOR_COMPONENT,
  k: DEFAULT_CMYK_KEY_COMPONENT,
};
