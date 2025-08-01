import { isNaN } from '../isNaN';

/**
 * #### Is date
 *
 * This function determines whether the given value is a **valid Date object**.
 * - Returns `true` only if the value is an instance of `Date` and represents a valid date.
 * - Returns `false` for non-date types and for `Date` objects with an invalid time value.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a valid `Date` object, `false` otherwise
 * @example
 *
 * isDate(new Date())
 * // true
 *
 * isDate(new Date("2023-10-01"))
 * // true
 *
 * isDate(new Date("invalid date"))
 * // false
 *
 * isDate("2023-10-01")
 * // false
 *
 * isDate(Date.now())
 * // false
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}
