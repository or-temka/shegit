/**
 * #### Resolve boolean
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a boolean if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {boolean | undefined} resolved boolean or `undefined`
 * @example
 * resolveBoolean(true)
 * // true
 *
 * resolveBoolean(() => () => false)
 * // false
 *
 * resolveBoolean("text")
 * // undefined
 *
 * resolveBoolean(() => () => () => true, 2)
 * // undefined
 *
 * resolveBoolean(() => () => () => true, 3)
 * // true
 */
export declare function resolveBoolean(value: unknown, depth?: number): boolean | undefined;
