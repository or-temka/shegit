"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = isFunction;
/**
 * #### Is function
 *
 * This function determines whether the given value is a **real function**.
 * - Returns `true` for standard functions, arrow functions, async, generator, class constructors, built-ins, and `Function` instances.
 * - Returns `false` for all non-function values, including objects with `.call`, arrays, primitives, and browser-specific quirks like `document.all`.
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a function, `false` otherwise
 * @example
 *
 * isFunction(() => {})
 * // true
 *
 * isFunction(async function () {})
 * // true
 *
 * isFunction(class {})
 * // true
 *
 * isFunction({ call: () => {} })
 * // false
 *
 * isFunction(null)
 * // false
 */
function isFunction(value) {
    return typeof value === 'function';
}
