import { CmykArray } from '../../../../types';
import { CmykObjToArrayInput } from './types';
/**
 * #### CMYK color object to CMYK array
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a format array [`cyan`, `magenta`, `yellow`, `key`].
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToArrayInput} obj Cmyk color object
 * @returns {CmykArray} Cmyk color array
 * @example
 *
 * cmykObjToArray({c: 1, m: 2, y: 3, k: 4})
 * // [1, 2, 3, 4]
 *
 * cmykObjToArray({c: 150, m: () => "+54", y: -20, k: 34.3})
 * // [100, 54, 0, 34]
 */
export declare function cmykObjToArray(obj?: CmykObjToArrayInput): CmykArray;
export { CmykObjToArrayInput };
