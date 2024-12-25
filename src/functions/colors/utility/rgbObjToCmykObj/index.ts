import { CmykObj } from 'types';
import { absoluteFloor } from '../../../number';
import {
  DEFAULT,
  DEFAULT_RGB_COLOR_COMPONENT,
  DEFAULT_RGB_OBJ,
  MAX_RGB_COMPONENT_VALUE,
  MIN_RGB_COMPONENT_VALUE,
} from './constants';
import { RgbObjToCmykObjInput } from './types';

const parseComponent = (component: any): number => {
  let actual = component;
  if (typeof component === 'function') actual = component();
  const num = Number(actual);
  return Number.isNaN(num) || num < MIN_RGB_COMPONENT_VALUE
    ? MIN_RGB_COMPONENT_VALUE
    : num > MAX_RGB_COMPONENT_VALUE
    ? MAX_RGB_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_RGB_COLOR_COMPONENT;
};

/**
 * #### RGBa color object to CMYK color object
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToCmykObjInput} obj RGBa color object
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * rgbObjToCmykObj({r: 1, g: 2, b: 3})
 * // { c: 67, m: 33, y: 0, k: 99 }
 *
 * rgbObjToCmykObj({r: 400, g: () => "+54", b: -20, a: 1})
 * // { c: 0, m: 79, y: 100, k: 0 }
 */
export function rgbObjToCmykObj(obj: RgbObjToCmykObjInput = DEFAULT.input): CmykObj {
  const rgbColor = DEFAULT_RGB_OBJ;
  let actual = obj;

  if (typeof obj === 'function') actual = obj();

  if (typeof actual === 'object') {
    if (Array.isArray(actual)) {
      return DEFAULT.return;
    }
    if (actual !== null) {
      const r = parseComponent(actual.r || DEFAULT_RGB_COLOR_COMPONENT);
      const g = parseComponent(actual.g || DEFAULT_RGB_COLOR_COMPONENT);
      const b = parseComponent(actual.b || DEFAULT_RGB_COLOR_COMPONENT);
      Object.assign(rgbColor, { r, g, b });
    }
  } else {
    return DEFAULT.return;
  }

  rgbColor.r /= 255;
  rgbColor.g /= 255;
  rgbColor.b /= 255;

  let k = 1 - Math.max(rgbColor.r, rgbColor.g, rgbColor.b);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };

  let c = (1 - rgbColor.r - k) / (1 - k);
  let m = (1 - rgbColor.g - k) / (1 - k);
  let y = (1 - rgbColor.b - k) / (1 - k);

  c = Math.round(c * 100);
  m = Math.round(m * 100);
  y = Math.round(y * 100);
  k = Math.round(k * 100);

  return { c, m, y, k };
}

export { RgbObjToCmykObjInput };
