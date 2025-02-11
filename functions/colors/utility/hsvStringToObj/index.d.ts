import { HsvObj } from '../../../../types';
import { HsvStringToObjInput } from './types';
/**
 * #### HSV color string to object
 *
 * Converts HSV color "hsv(`hue`, `saturation`%, `value`%)" as an string
 * to a format object `{h: hue, s: saturation, v: value}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvStringToObjInput} string HSV color string
 * @returns {HsvObj} HSV color object
 * @example
 *
 * hsvStringToObj("hsv(1, 2%, 3%)")
 * // {h: 1, s: 2, v: 3}
 *
 * hsvStringToObj(() => "500, 12, -200")
 * // {h: 360, s: 12, v: 0}
 */
export declare function hsvStringToObj(string?: HsvStringToObjInput): HsvObj;
