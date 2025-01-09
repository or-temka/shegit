import { absoluteFloor } from '../../../number';
import {
  DEFAULT,
  DEFAULT_RGB_COLOR_COMPONENT,
  MAX_RGB_COMPONENT_VALUE,
  MIN_RGB_COMPONENT_VALUE,
} from './constants';
import { RgbObjToHexStringInput } from './types';

const parseToHex = (component: any): string => {
  const hex = Math.round(component).toString(16).padStart(2, '0');
  return hex.toUpperCase();
};

const parseRgbComponent = (component: any): number => {
  let actual = component || DEFAULT_RGB_COLOR_COMPONENT;
  if (typeof component === 'function') actual = component();
  const num = Number(actual);
  return Number.isNaN(num) || num < MIN_RGB_COMPONENT_VALUE
    ? MIN_RGB_COMPONENT_VALUE
    : num > MAX_RGB_COMPONENT_VALUE
    ? MAX_RGB_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_RGB_COLOR_COMPONENT;
};

/**
 * #### RGBa color object to HEX color string
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a HEX color "#`red` `green` `blue`" as an string.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToHexStringInput} obj RGBa color object
 * @returns {string} HEX color string
 * @example
 *
 * rgbObjToHexString({ r: 64, g: 21, b: 99 })
 * // "#401563"
 *
 * rgbObjToHexString(() => ({ r: -500, g: 500, b: '58.8' }))
 * // "#00FF3A"
 */
export function rgbObjToHexString(obj: RgbObjToHexStringInput = DEFAULT.input): string {
  let actual = obj;

  if (typeof obj === 'function') actual = obj();

  if (typeof actual === 'object') {
    if (Array.isArray(actual)) {
      return DEFAULT.return;
    }
    if (actual !== null) {
      const r = parseToHex(parseRgbComponent(actual?.r));
      const g = parseToHex(parseRgbComponent(actual?.g));
      const b = parseToHex(parseRgbComponent(actual?.b));

      return `#${r}${g}${b}`;
    }
  }

  return DEFAULT.return;
}

export { RgbObjToHexStringInput };
