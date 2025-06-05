/**
 * #### Is boolean
 *
 * This function determines whether the given value is a **primitive boolean**.
 * - Returns `true` only if the value is the primitive `true` or `false`.
 * - Returns `false` for any non-boolean type or boolean object (e.g., `new Boolean(true)`).
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a boolean primitive, `false` otherwise
 * @example
 *
 * isBoolean(true)
 * // true
 *
 * isBoolean(false)
 * // true
 *
 * isBoolean(new Boolean(true))
 * // false
 *
 * isBoolean("true")
 * // false
 *
 * isBoolean(Boolean(0))
 * // true
 *
 * isBoolean(1 === 1)
 * // true
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
