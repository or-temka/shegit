import { ColorProp, ColorType, ReturnColorType, To } from './types';
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
 * toColor([1, 2, 3], "rgb-object")
 * // {r: 1, g: 2, b: 3, a: 1}
 *
 * toColor('cmyk(64%, 21%, 99%, 2%)', "hex-string")
 * // '#5AC502'
 *
 * toColor([12, 99, 44, 12], "cmyk-object", fromColorType: 'rgb')
 * // { c: 88, m: 0, y: 56, k: 61 }
 */
export declare function toColor<T extends To>(color?: ColorProp, to?: T, fromColorType?: ColorType | undefined): ReturnColorType<T>;
