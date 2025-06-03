/**
 * #### Is number
 *
 * This function determines whether the given value is a valid, finite primitive number.
 * - Returns `true` if the value is a finite number (not `NaN`, `Infinity`, or `-Infinity`).
 * - Returns `false` for non-number types or special numeric values.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a finite number, `false` otherwise
 * @example
 *
 * isNumber(42)
 * // true
 *
 * isNumber(0)
 * // true
 *
 * isNumber(-3.14)
 * // true
 *
 * isNumber("42")
 * // false
 *
 * isNumber(NaN)
 * // false
 *
 * isNumber(Infinity)
 * // false
 *
 * isNumber(new Number(5))
 * // false
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}
