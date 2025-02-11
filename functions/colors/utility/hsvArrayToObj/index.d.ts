import { HsvArrayToObjInput, HsvArrayToObjReturn } from './types';
/**
 * #### HSV color array to object
 *
 * Converts HSV color [`hue`, `saturation`, `value`] as an array
 * to a format object {h: `hue`, s: `saturation`, v: `value`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvArrayToObjInput} array HSV color array
 * @returns {HsvArrayToObjReturn} HSV color return
 * @example
 *
 * hsvArrayToObj([1, 2, 3])
 * // {h: 1, s: 2, v: 3}
 *
 * hsvArrayToObj(() => [400, () => "+54.3", -20])
 * // {h: 360, s: 54, v: 0}
 */
export declare function hsvArrayToObj(array?: HsvArrayToObjInput): HsvArrayToObjReturn;
export { HsvArrayToObjInput, HsvArrayToObjReturn };
