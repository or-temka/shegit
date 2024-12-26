import { RgbObj } from 'types';
import {
  DEFAULT_RGB_ALPHA_COMPONENT,
  DEFAULT_RGB_COLOR_COMPONENT,
  MAX_RGB_COMPONENT_VALUE,
  MIN_RGB_COMPONENT_VALUE,
} from '../constants';
import { FromColorType } from '../types';
import { absoluteFloor } from '../../../number';

const parseRgbComponent = (component: any): number => {
  let actual = component;
  if (typeof component === 'function') actual = component();
  const num = Number(actual);
  return Number.isNaN(num) || num < MIN_RGB_COMPONENT_VALUE
    ? DEFAULT_RGB_COLOR_COMPONENT
    : num > MAX_RGB_COMPONENT_VALUE
    ? MAX_RGB_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_RGB_COLOR_COMPONENT;
};

export const anyObjectToRgba = (obj: Object, fromColorType: FromColorType) => {
  const r = parseRgbComponent((obj as RgbObj).r || DEFAULT_RGB_COLOR_COMPONENT);
  const g = parseRgbComponent((obj as RgbObj).g || DEFAULT_RGB_COLOR_COMPONENT);
  const b = parseRgbComponent((obj as RgbObj).b || DEFAULT_RGB_COLOR_COMPONENT);

  return { r, g, b, a: DEFAULT_RGB_ALPHA_COMPONENT };
};
