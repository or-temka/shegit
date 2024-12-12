import { rgbStringToObj } from '../rgbStringToObj';
import { rgbObjToString } from '../rgbObjToString';
import { rgbObjToArray } from '../rgbObjToArray';
import { rgbArrayToObj } from '../rgbArrayToObj';
import { RgbaObj } from '../../types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { ColorProp, ReturnColorType, To } from './types';
import { absoluteFloor } from '../absoluteFloor';

const parseComponent = (component: any): number => {
  let actual = component;
  if (typeof component === 'function') actual = component();
  const num = Number(actual);
  return Number.isNaN(num) || num < 0
    ? DEFAULT_COLOR_COMPONENT
    : num > 255
    ? 255
    : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
};

/**
 * #### To color
 *
 * Convert a color of one type to another.
 *
 * @since 1.0.1
 * @category Color
 * @param {Color} color color in any representation
 * @param {To} to type of the return color
 * @returns {ReturnColorType<To>} the color in the selected "To" type
 * @example
 *
 * toColor([1, 2, 3], "object") // {r: 1, g: 2, b: 3, a: 1}
 * toColor(["+44", -200, () => 12, 2], "object") // {r: 44, g: 0, b: 12, a: 1}
 */
export function toColor<T extends To>(
  color: ColorProp = DEFAULT.input,
  to: T = 'object' as T,
): ReturnColorType<T> {
  const c: RgbaObj = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };

  if (typeof color === 'function') color = color();

  if (typeof color === 'object') {
    if (Array.isArray(color)) {
      const { r, g, b } = rgbArrayToObj(color);
      Object.assign(c, { r, g, b, a: 1 });
    } else {
      if (color !== null) {
        const r = parseComponent(color.r || DEFAULT_COLOR_COMPONENT);
        const g = parseComponent(color.g || DEFAULT_COLOR_COMPONENT);
        const b = parseComponent(color.b || DEFAULT_COLOR_COMPONENT);
        Object.assign(c, { r, g, b, a: 1 });
      }
    }
  } else if (typeof color === 'string') {
    const { r, g, b, a = 1 } = rgbStringToObj(color);
    Object.assign(c, { r, g, b, a });
  }

  switch (to) {
    case 'object':
    case 'rgb-object':
      return c as ReturnColorType<T>;
    case 'rgb-array':
      return rgbObjToArray(c) as ReturnColorType<T>;
    case 'rgb-string':
      return rgbObjToString(c) as ReturnColorType<T>;
    default:
      return c as ReturnColorType<T>;
  }
}
