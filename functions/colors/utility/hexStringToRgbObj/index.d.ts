import { HexStringToRgbObjInput, HexStringToRgbObjReturn } from './types';
/**
 * #### HEX color string to RGB color object
 *
 * Converts HEX color "#`red` `green` `blue`" as an string
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HexStringToRgbObjInput} str HEX color string
 * @returns {HexStringToRgbObjReturn} RGBa color object
 * @example
 *
 * hexStringToRgbObj("#1200E3")
 * // { r: 18, g: 0, b: 227 }
 *
 * hexStringToRgbObj(() => "123")
 * // { r: 17, g: 34, b: 51 }
 */
export declare function hexStringToRgbObj(str?: HexStringToRgbObjInput): HexStringToRgbObjReturn;
export { HexStringToRgbObjInput };
