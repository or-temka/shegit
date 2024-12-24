import { absoluteFloor } from '../../../number';
import { RgbaObj } from '../../../../types';
import {
  DEFAULT,
  DEFAULT_CMYK_COLOR_COMPONENT,
  DEFAULT_CMYK_OBJ,
  MAX_CMYK_COMPONENT_VALUE,
  MIN_CMYK_COMPONENT_VALUE,
} from './constants';
import { CmykObjToRgbObjInput } from './types';

const parseComponent = (component: any): number => {
  let actual = component;
  if (typeof component === 'function') actual = component();
  const num = Number(actual);
  return Number.isNaN(num) || num < MIN_CMYK_COMPONENT_VALUE
    ? MIN_CMYK_COMPONENT_VALUE
    : num > MAX_CMYK_COMPONENT_VALUE
    ? MAX_CMYK_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_CMYK_COLOR_COMPONENT;
};

/**
 * #### CMYK color object to RGB color object
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToRgbObjInput} obj CMYK color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * cmykObjToRgbObj({r: 1, g: 2, b: 3})
 * // [1, 2, 3]
 *
 * cmykObjToRgbObj({r: 400, g: () => "+54", b: -20, a: 1})
 * // [255, 54, 0]
 */
export function cmykObjToRgbObj(obj: CmykObjToRgbObjInput = DEFAULT.input): RgbaObj {
  const cmykColor = DEFAULT_CMYK_OBJ;
  let actual = obj;

  if (typeof obj === 'function') actual = obj();

  if (typeof actual === 'object') {
    if (Array.isArray(actual)) {
      return DEFAULT.return;
    }
    if (actual !== null) {
      const c = parseComponent(actual.c || DEFAULT_CMYK_COLOR_COMPONENT);
      const m = parseComponent(actual.m || DEFAULT_CMYK_COLOR_COMPONENT);
      const y = parseComponent(actual.y || DEFAULT_CMYK_COLOR_COMPONENT);
      const k = parseComponent(actual.k || DEFAULT_CMYK_COLOR_COMPONENT);
      Object.assign(cmykColor, { c, m, y, k });
    }
  } else {
    return DEFAULT.return;
  }

  cmykColor.c /= 100;
  cmykColor.m /= 100;
  cmykColor.y /= 100;
  cmykColor.k /= 100;

  // Calculate RGB values in range [0, 1]
  let r = (1 - cmykColor.c) * (1 - cmykColor.k);
  let g = (1 - cmykColor.m) * (1 - cmykColor.k);
  let b = (1 - cmykColor.y) * (1 - cmykColor.k);

  // Convert to range [0, 255]
  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return { r, g, b, a: 1 };
}

export { CmykObjToRgbObjInput };
