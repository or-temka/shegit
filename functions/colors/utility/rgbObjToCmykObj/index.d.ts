import { CmykObj } from 'types';
import { RgbObjToCmykObjInput } from './types';
/**
 * #### RGBa color object to CMYK color object
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToCmykObjInput} obj RGBa color object
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * rgbObjToCmykObj({r: 1, g: 2, b: 3})
 * // { c: 67, m: 33, y: 0, k: 99 }
 *
 * rgbObjToCmykObj({r: 400, g: () => "+54", b: -20, a: 1})
 * // { c: 0, m: 79, y: 100, k: 0 }
 */
export declare function rgbObjToCmykObj(obj?: RgbObjToCmykObjInput): CmykObj;
export { RgbObjToCmykObjInput };
