/**
 * #### Resolve number
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a Set if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Set<any> | undefined} resolved Set or `undefined`
 * @example
 *
 * resolveSet(new Set(["value1", "value2"]))
 * // Set { "value1", "value2" }
 *
 * resolveNumber(() => () => new Set([44, false]))
 * // Set { 44, false }
 *
 * resolveNumber("text")
 * // undefined
 *
 * resolveNumber(() => () => () => new Set(["name", 0]), 2)
 * // undefined
 *
 * resolveNumber(() => () => () => new Set(["name", 0]), 3)
 * // Set { "name", 0 }
 */
export declare function resolveSet(value: unknown, depth?: number): Set<any> | undefined;
