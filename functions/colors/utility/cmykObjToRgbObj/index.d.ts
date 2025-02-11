import { RgbaObj } from '../../../../types';
import { CmykObjToRgbObjInput } from './types';
/**
 * #### CMYK color object to RGB color object
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToRgbObjInput} obj CMYK color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * cmykObjToRgbObj({ c: 1, m: 2, y: 3, k: 4 })
 * // { r: 242, g: 240, b: 237, a: 1 }
 *
 * cmykObjToRgbObj(() => ({ c: () => '+24.8', m: () => '96', y: () => 5000, k: () => 'gdfgh' }))
 * // { r: 194, g: 10, b: 0, a: 1 }
 */
export declare function cmykObjToRgbObj(obj?: CmykObjToRgbObjInput): RgbaObj;
export { CmykObjToRgbObjInput };
