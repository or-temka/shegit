import { CmykObj } from '../../../../types';
import { CmykStringToObjInput } from './types';
/**
 * #### CMYK color string to object
 *
 * Converts CMYK color "cmyk(`cyan`%, `magenta`%, `yellow`%, `key%`)"" as an string
 * to a format object `{c: cyan, m: magenta, y: yellow, k: key}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykStringToObjInput} string CMYK color string
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykStringToObj("cmyk(1, 2, 3, 4)")
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykStringToObj(() => "500, 12, -200, 5.5")
 * // {c: 100, m: 12, y: 0, k: 5}
 */
export declare function cmykStringToObj(string?: CmykStringToObjInput): CmykObj;
