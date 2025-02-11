import { RgbaObj } from '../../../../types';
import { RgbStringToObjInput } from './types';
/**
 * #### RGB color string to object
 *
 * Converts RGB color "rgb(`red`, `green`, `blue`)" as an string
 * to a format object `{r: red, g: green, b: blue, a: alpha}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbStringToObjInput} string RGB color string
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * rgbStringToObj("rgb(1, 2, 3)")
 * // {r: 1, g: 2, b: 3, a: 1}
 *
 * rgbStringToObj(() => "500, 12, -200, 0.5")
 * // {r: 255, g: 12, b: 0, a: 0.5}
 */
export declare function rgbStringToObj(string?: RgbStringToObjInput): RgbaObj;
