import { RgbaObj } from 'types';
import { rgbArrayToObj } from '@shegit/rgb-array-to-obj';
import { DEFAULT } from './constants';
import { ColorProp, ReturnColorType, To } from './types';

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
 * toColor([1, 2, 3], "object")
 * // => {r: 1, g: 2, b: 3, a: 1}
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

  if (typeof color === 'function') {
    color = color();
  }

  if (typeof color === 'object') {
    const isArray = Array.isArray(color);
    if (isArray) {
      const { r, g, b } = rgbArrayToObj(color);
      Object.assign(c, { r, g, b, a: 1 });
    }
  }

  switch (to) {
    case 'object':
      return c as ReturnColorType<T>;
    default:
      return c as ReturnColorType<T>;
  }
}
