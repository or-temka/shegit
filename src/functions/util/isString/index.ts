/**
 * #### Is string
 *
 * This function determines whether the given value is a **primitive string**.
 * - Returns `true` if the value is a primitive string (e.g., `"text"`, `''`, template literals).
 * - Returns `false` for any non-string type or string object (e.g., `new String("text")`).
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a string primitive, `false` otherwise
 * @example
 *
 * isString("hello")
 * // true
 *
 * isString("")
 * // true
 *
 * isString(42)
 * // false
 *
 * isString(new String("hello"))
 * // false
 *
 * isString(null)
 * // false
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
