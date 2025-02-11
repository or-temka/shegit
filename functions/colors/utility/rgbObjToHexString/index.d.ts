import { RgbObjToHexStringInput } from './types';
/**
 * #### RGBa color object to HEX color string
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a HEX color "#`red` `green` `blue`" as an string.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToHexStringInput} obj RGBa color object
 * @returns {string} HEX color string
 * @example
 *
 * rgbObjToHexString({ r: 64, g: 21, b: 99 })
 * // "#401563"
 *
 * rgbObjToHexString(() => ({ r: -500, g: 500, b: '58.8' }))
 * // "#00FF3A"
 */
export declare function rgbObjToHexString(obj?: RgbObjToHexStringInput): string;
export { RgbObjToHexStringInput };
