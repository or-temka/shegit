/**
 * #### Is empty
 *
 * This function to determine if a given value is empty.
 * - Return `true` if the value is considered empty.
 * - Return `false` otherwise.
 *
 * @since 1.2.0
 * @category Util
 * @param {unknown} value can be any type
 * @returns {boolean} value is empty `true | false`
 * @example
 *
 * isEmpty(undefined)
 * // true
 *
 * isEmpty(34)
 * // false
 *
 * isEmpty([])
 * // true
 *
 * isEmpty([1, 2])
 * // false
 *
 * isEmpty({})
 * // true
 *
 * isEmpty({ name: "Alina" })
 * // false
 *
 * isEmpty(null)
 * // true
 *
 * isEmpty("")
 * // true
 *
 * isEmpty("some")
 * // false
 */
export function isEmpty(value: unknown): boolean {
  if (value == null) return true;

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (value instanceof Date) {
    return false;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}
