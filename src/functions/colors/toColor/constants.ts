import { Default } from './types';

export const DEFAULT_COLOR_COMPONENT = 0;

export const DEFAULT: Default = {
  input: [DEFAULT_COLOR_COMPONENT, DEFAULT_COLOR_COMPONENT, DEFAULT_COLOR_COMPONENT],
  return: {
    r: DEFAULT_COLOR_COMPONENT,
    g: DEFAULT_COLOR_COMPONENT,
    b: DEFAULT_COLOR_COMPONENT,
    a: 1,
  },
};
