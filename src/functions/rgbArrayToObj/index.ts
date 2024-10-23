import { RgbObj } from 'types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { FuncRgbArray, RgbArrayWithFuncVal } from './types';

/**
 * #### RGB color array to object
 *
 * Converts RGB color [red, green, blue] as an array
 * to a format object {r: [red], g: [green], b: [blue]}.
 *
 * @since 1.0.1
 * @category Color
 * @param {rgbArray | FuncRgbArray} array RGB color array
 * @returns {rgbObj} RGB color object
 * @example
 *
 * rgbArrayToObj([1, 2, 3])
 * // => {r: 1, g: 2, b: 3}
 */
function roundDownAbsolute(value: number): number {
  return Math.floor(Math.abs(value));
}

export function rgbArrayToObj(array: RgbArrayWithFuncVal | FuncRgbArray = DEFAULT.input): RgbObj {
  let actual = DEFAULT.input;
  const isArray = Array.isArray(array);

  if (!isArray) {
    const isFunction = typeof array === 'function';
    if (!isFunction) return DEFAULT.return;
    actual = array();
  } else {
    actual = array;
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
      : roundDownAbsolute(num);
  };

  const r = parseComponent(actual[0]);
  const g = parseComponent(actual[1]);
  const b = parseComponent(actual[2]);
  return { r, g, b };
}

export { RgbArrayWithFuncVal };
