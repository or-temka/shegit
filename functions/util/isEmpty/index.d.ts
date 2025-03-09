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
export declare function isEmpty(value: unknown): boolean;
