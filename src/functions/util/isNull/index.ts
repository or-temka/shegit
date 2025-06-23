/**
 * #### Is null
 *
 * This function determines whether the given value is exactly `null`.
 * - Returns `true` only for the `null` literal.
 * - Returns `false` for any other value, including `undefined`, `false`, `0`, `""`, `NaN`, objects, arrays, and other falsy types.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is `null`, `false` otherwise
 * @example
 *
 * isNull(null)
 * // true
 *
 * isNull(undefined)
 * // false
 *
 * isNull(0)
 * // false
 *
 * isNull("")
 * // false
 *
 * isNull({})
 * // false
 *
 * isNull(Object.create(null))
 * // false
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
