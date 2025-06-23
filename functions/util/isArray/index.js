"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = isArray;
/**
 * #### Is array
 *
 * This function determines whether the given value is a **real array**.
 * - Returns `true` if the value is an actual array created via `[]`, `new Array()`, `Array.from()`, etc.
 * - Returns `false` for non-array types and array-like objects (e.g., `arguments`, `NodeList`, or `{ length: 2 }`).
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is an array, `false` otherwise
 * @example
 *
 * isArray([])
 * // true
 *
 * isArray([1, 2, 3])
 * // true
 *
 * isArray(new Array())
 * // true
 *
 * isArray("hello")
 * // false
 *
 * isArray({ length: 2 })
 * // false
 *
 * isArray(document.querySelectorAll("div"))
 * // false
 *
 * isArray(Object.create(Array.prototype))
 * // false
 */
function isArray(value) {
    return Array.isArray(value);
}
