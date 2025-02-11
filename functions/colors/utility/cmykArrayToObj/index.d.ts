import { CmykObj } from '../../../../types';
import { CmykArrayToObjInput } from './types';
/**
 * #### CMYK color array to object
 *
 * Converts CMYK color [`cyan`, `magenta`, `yellow`, `key`] as an array
 * to a format object {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykArrayToObjInput} array CMYK color array
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykArrayToObj([1, 2, 3, 4])
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykArrayToObj(["+44", -200, () => 12, 110])
 * // {c: 44, m: 0, y: 12, k: 100}
 */
export declare function cmykArrayToObj(array?: CmykArrayToObjInput): CmykObj;
export { CmykArrayToObjInput };
