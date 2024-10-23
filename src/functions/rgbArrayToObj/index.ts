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
  const r = Number(actual[0] || DEFAULT_COLOR_COMPONENT);
  const g = Number(actual[1] || DEFAULT_COLOR_COMPONENT);
  const b = Number(actual[2] || DEFAULT_COLOR_COMPONENT);
  return {
    r: Number.isNaN(r) || r < 0 ? DEFAULT_COLOR_COMPONENT : r <= 255 ? roundDownAbsolute(r) : 255,
    g: Number.isNaN(g) || g < 0 ? DEFAULT_COLOR_COMPONENT : g <= 255 ? roundDownAbsolute(g) : 255,
    b: Number.isNaN(b) || b < 0 ? DEFAULT_COLOR_COMPONENT : b <= 255 ? roundDownAbsolute(b) : 255,
  };
}
