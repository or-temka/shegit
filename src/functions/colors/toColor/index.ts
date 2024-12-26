import { rgbObjToString, rgbObjToArray } from '../utility';
import { RgbaObj } from '../../../types';
import { DEFAULT } from './constants';
import { ColorProp, FromColorType, ReturnColorType, To } from './types';
import { anyArrayToRgba } from './utils/anyArrayToRgba';
import { anyObjectToRgba } from './utils/anyObjectToRgba';
import { anyStringToRgba } from './utils/anyStringToRgba';

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
  fromColorType: FromColorType = 'rgb',
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
      Object.assign(c, anyArrayToRgba(color));
    } else {
      if (color !== null) {
        Object.assign(c, anyObjectToRgba(color, fromColorType));
      }
    }
  } else if (typeof color === 'string') {
    Object.assign(c, anyStringToRgba(color));
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
