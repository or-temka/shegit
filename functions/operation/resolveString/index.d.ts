/**
 * #### Resolve string
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a string if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {string | undefined} resolved string or `undefined`
 * @example
 *
 * resolveString("text")
 * // "text"
 *
 * resolveString(() => () => "some")
 * // "some"
 *
 * resolveString(983)
 * // undefined
 *
 * resolveString(() => () => () => "any", 2)
 * // undefined
 *
 * resolveString(() => () => () => "any", 3)
 * // "any"
 */
export declare function resolveString(value: unknown, depth?: number): string | undefined;
