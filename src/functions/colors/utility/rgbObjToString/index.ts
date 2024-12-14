import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { RgbObjFunc } from '../../../../types';
import { RgbObjToStringInput } from './types';
import { absoluteFloor } from '../../../number/absoluteFloor';

/**
 * #### RGB color object to RGB string
 *
 * Converts RGB color `{r: red, g: green, b: blue}` as an object
 * to a format string `"rgb(red, green, blue)"`.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToStringInput} obj RGB color object
 * @returns {string} RGB color string
 * @example
 *
 * rgbObjToString({r: 1, g: 2, b: 3})
 * // "rgb(1, 2, 3)"
 *
 * rgbObjToString({r: 400, g: () => "+54", b: -20, a: 1})
 * // "rgb(255, 54, 0)"
 */
export function rgbObjToString(obj: RgbObjToStringInput = DEFAULT.input): string {
  let actual = DEFAULT.input;
  const isObject = Object.prototype.toString.call(obj) === '[object Object]';

  if (isObject) {
    actual = obj;
  } else if (typeof obj === 'function') {
    actual = obj();
    if (actual === null) {
      return DEFAULT.return;
    }
  } else {
    return DEFAULT.return;
  }

  const parseComponent = (component: any): number => {
    if (typeof component === 'function') {
      component = component();
    }

    const num = Number(component);
    return Number.isNaN(num) || num < 0
      ? DEFAULT_COLOR_COMPONENT
      : num > 255
      ? 255
      : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
  };

  const r = parseComponent((actual as RgbObjFunc).r);
  const g = parseComponent((actual as RgbObjFunc).g);
  const b = parseComponent((actual as RgbObjFunc).b);

  return `rgb(${r}, ${g}, ${b})`;
}
