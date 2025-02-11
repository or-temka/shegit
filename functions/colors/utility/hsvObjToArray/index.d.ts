import { HsvArray } from '../../../../types';
import { HsvObjToArrayInput } from './types';
/**
 * #### HSV color object to array
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a format array [`hue`, `saturation`, `value`].
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToArrayInput} obj HSV color object
 * @returns {HsvArray} HSV color array
 * @example
 *
 * hsvObjToArray({h: 1, s: 2, v: 3})
 * // [1, 2, 3]
 *
 * hsvObjToArray(() => {h: 400, s: () => "+54.3", v: -20})
 * // [360, 54, 0]
 */
export declare function hsvObjToArray(obj?: HsvObjToArrayInput): HsvArray;
export { HsvObjToArrayInput };
