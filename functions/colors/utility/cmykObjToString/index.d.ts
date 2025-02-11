import { CmykObjToStringInput } from './types';
/**
 * #### CMYK color object to CMYK string
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a format string "cmyk(`cyan`%, `magenta`%, `yellow`%, `key`%)".
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToStringInput} obj CMYK color object
 * @returns {string} CMYK color string
 * @example
 *
 * cmykObjToString({c: 1, m: 2, y: 3, k: 4})
 * // "cmyk(1%, 2%, 3%, 4%)"
 *
 * cmykObjToString({c: 400, m: () => "+54", y: -20, k: 1})
 * // "cmyk(100%, 54%, 0%, 1%)"
 */
export declare function cmykObjToString(obj?: CmykObjToStringInput): string;
