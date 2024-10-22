import { rgbArray, rgbObj } from 'types';

/**
 * #### RGB color array to object
 *
 * Converts RGB color [red, green, blue] as an array
 * to a format object {r: [red], g: [green], b: [blue]}.
 *
 * @since 1.0.1
 * @category Color
 * @param {rgbArray} array RGB color array
 * @returns {rgbObj} RGB color object
 * @example
 *
 * rgbArrayToObj([1, 2, 3])
 * // => {r: 1, g: 2, b: 3}
 */
function rgbArrayToObj(array: rgbArray): rgbObj {
  return {
    r: array[0],
    g: array[1],
    b: array[2],
  };
}

export default rgbArrayToObj;
