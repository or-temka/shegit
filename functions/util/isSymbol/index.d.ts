/**
 * #### Is symbol
 *
 * This function determines whether the given value is a **symbol primitive**.
 * - Returns `true` only if the value is of type `symbol` (e.g., `Symbol()`, `Symbol.iterator`, `Symbol.for()`).
 * - Returns `false` for all other types, including boxed symbols (e.g., `Object(Symbol())`, `new Symbol()`).
 *
 * @since 1.3.0
 * @category Util
 * @param {unknown} value - The value to check
 * @returns {boolean} `true` if value is a symbol primitive, `false` otherwise
 * @example
 *
 * isSymbol(Symbol())
 * // true
 *
 * isSymbol(Symbol.iterator)
 * // true
 *
 * isSymbol(Symbol.for("key"))
 * // true
 *
 * isSymbol("symbol")
 * // false
 *
 * isSymbol(Object(Symbol()))
 * // false
 *
 * isSymbol(new Symbol())
 * // false
 */
export declare function isSymbol(value: unknown): value is symbol;
