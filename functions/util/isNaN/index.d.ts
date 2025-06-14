/**
 * #### Is NaN
 *
 * This function determines whether the given value is the special `NaN` value (Not-a-Number).
 * - Returns `true` only if the value is the **primitive** `NaN`.
 * - Returns `false` for all other values, including anything that is not strictly the `NaN` primitive.
 * - Unlike the global `isNaN()` function, this version avoids type coercion.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is primitive `NaN`, `false` otherwise
 * @example
 *
 * isNaN(NaN)
 * // true
 *
 * isNaN(0 / 0)
 * // true
 *
 * isNaN(Number('abc'))
 * // true
 *
 * isNaN("NaN")
 * // false
 *
 * isNaN(42)
 * // false
 *
 * isNaN(new Number(NaN))
 * // false
 */
export declare function isNaN(value: unknown): boolean;
