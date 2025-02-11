import { HsvObj } from 'types';
import { RgbObjToHsvObjInput } from './types';
/**
 * #### RGBa color object to HSV color object
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a HSV color {h: `hue`, s: `saturation`, v: `value`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToHsvObjInput} obj RGBa color object
 * @returns {HsvObj} HSV color object
 * @example
 *
 * rgbObjToHsvObj({ r: 64, g: 21, b: 99 })
 * // { h: 273, s: 79, v: 39 }
 *
 * rgbObjToHsvObj(() => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }))
 * // { h: 109, s: 100, v: 100 }
 */
export declare function rgbObjToHsvObj(obj?: RgbObjToHsvObjInput): HsvObj;
export { RgbObjToHsvObjInput };
