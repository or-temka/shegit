import { CmykObjToArrayDefault } from './types';

export const DEFAULT_COLOR_COMPONENT = 0;

export const DEFAULT: CmykObjToArrayDefault = {
  input: {
    c: DEFAULT_COLOR_COMPONENT,
    m: DEFAULT_COLOR_COMPONENT,
    y: DEFAULT_COLOR_COMPONENT,
    k: DEFAULT_COLOR_COMPONENT,
  },
  return: [
    DEFAULT_COLOR_COMPONENT,
    DEFAULT_COLOR_COMPONENT,
    DEFAULT_COLOR_COMPONENT,
    DEFAULT_COLOR_COMPONENT,
  ],
};
