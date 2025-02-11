import { RgbaObj } from '../../../../types';
import { HsvObjToRgbObjInput } from './types';
/**
 * #### HSV color object to RGB color object
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToRgbObjInput} obj HSV color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * hsvObjToRgbObj({ h: 220, s: 50, v: 80 })
 * // { r: 102, g: 136, b: 204, a: 1 }
 *
 * hsvObjToRgbObj(() => ({ h: '262.3', s: '+99.9', v: '2.6' }))
 * // { r: 2, g: 0, b: 5, a: 1 }
 *
 * hsvObjToRgbObj("some")
 * // { r: 0, g: 0, b: 0, a: 1 }
 */
export declare function hsvObjToRgbObj(obj?: HsvObjToRgbObjInput): RgbaObj;
export { HsvObjToRgbObjInput };
