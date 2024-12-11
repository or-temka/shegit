import { RgbObj } from '../../types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { Input } from './types';

function roundDownAbsolute(value: number): number {
  return Math.floor(Math.abs(value));
}

/**
 * #### RGB color array to object
 *
 * Converts RGB color [red, green, blue] as an array
 * to a format object {r: [red], g: [green], b: [blue]}.
 *
 * @since 1.0.1
 * @category Color
 * @param {Input} array RGB color array
 * @returns {RgbObj} RGB color object
 * @example
 *
 * rgbArrayToObj([1, 2, 3]) // {r: 1, g: 2, b: 3}
 * rgbArrayToObj(["+44", -200, () => 12, 2]) // {r: 44, g: 0, b: 12}
 */
export function rgbArrayToObj(array: Input = DEFAULT.input): RgbObj {
  let actual = DEFAULT.input;

  if (Array.isArray(array)) {
    actual = array;
  } else if (typeof array === 'function') {
    actual = array();
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
      : roundDownAbsolute(num);
  };

  const r = parseComponent(actual[0]);
  const g = parseComponent(actual[1]);
  const b = parseComponent(actual[2]);
  return { r, g, b };
}

export { Input };
