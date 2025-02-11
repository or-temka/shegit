import { RgbObjToStringInput } from './types';
/**
 * #### RGB color object to string
 *
 * Converts RGB color `{r: red, g: green, b: blue}` as an object
 * to a format string "rgb(`red`, `green`, `blue`)".
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
export declare function rgbObjToString(obj?: RgbObjToStringInput): string;
