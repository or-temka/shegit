/**
 * #### Is plain object
 *
 * This function determines whether the given value is a **plain object**.
 * - Returns `true` if the value is a regular object (created via `{}`, `new Object()`, `Object.create(null)`).
 * - Returns `false` for arrays, functions, special objects (`Date`, `Map`, etc.), and non-object types.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a plain object, `false` otherwise
 * @example
 *
 * isPlainObject({})
 * // true
 *
 * isPlainObject({ key: "value" })
 * // true
 *
 * isPlainObject(Object.create(null))
 * // true
 *
 * isPlainObject(Object.create({ value: "text" }))
 * // false
 *
 * isPlainObject(42)
 * // false
 *
 * isPlainObject([])
 * // false
 *
 * isPlainObject(new Date())
 * // false
 */
export declare function isPlainObject(value: unknown): value is Record<string | number | symbol, unknown>;
