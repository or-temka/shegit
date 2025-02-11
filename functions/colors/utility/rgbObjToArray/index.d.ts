import { RgbArray } from '../../../../types';
import { RgbObjToArrayInput } from './types';
/**
 * #### RGB color object to RGB array
 *
 * Converts RGB color `{r: red, g: green, b: blue}` as an object
 * to a format array [`red`, `green`, `blue`].
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToArrayInput} obj RGB color object
 * @returns {RgbArray} RGB color array
 * @example
 *
 * rgbObjToArray({r: 1, g: 2, b: 3})
 * // [1, 2, 3]
 *
 * rgbObjToArray(() => {r: 400, g: () => "+54", b: -20, a: 1})
 * // [255, 54, 0]
 */
export declare function rgbObjToArray(obj?: RgbObjToArrayInput): RgbArray;
export { RgbObjToArrayInput };
