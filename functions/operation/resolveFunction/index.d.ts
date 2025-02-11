/**
 * #### Resolve function
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a last function if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Function | undefined} resolved function or `undefined`
 * @example
 *
 * resolveFunction(() => 55)
 * // () => 55
 *
 * resolveFunction(() => () => () => "some")
 * // () => "some"
 *
 * resolveFunction("text")
 * // undefined
 *
 * resolveFunction(() => () => () => () => [0, false], 2)
 * // () => () => [0, false]
 *
 * resolveFunction(() => () => () => 33, 3)
 * // undefined
 */
export declare function resolveFunction(value: unknown, depth?: number): Function | undefined;
