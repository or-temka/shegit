import { HsvObjToStringInput, HsvObjToStringReturn } from './types';
/**
 * #### HSV color object to string
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a format string "hsv(`hue`, `saturation`%, `value`%)"".
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToArrayInput} obj HSV color object
 * @returns {HsvString} HSV color string
 * @example
 *
 * hsvObjToString({h: 1, s: 2, v: 3})
 * // "hsv(1, 2%, 3%)"
 *
 * hsvObjToString({h: 400, s: () => "+54.3", v: -20})
 * // "hsv(360, 54%, 0%)"
 */
export declare function hsvObjToString(obj?: HsvObjToStringInput): HsvObjToStringReturn;
export { HsvObjToStringInput, HsvObjToStringReturn };
