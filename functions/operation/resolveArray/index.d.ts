/**
 * #### Resolve array
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a array if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {any[] | undefined} resolved array or `undefined`
 * @example
 *
 * resolveArray([1, 2])
 * // [1, 2]
 *
 * resolveArray(() => () => [() => 4, "hi"])
 * // [() => 4, "hi"]
 *
 * resolveArray("text")
 * // undefined
 *
 * resolveArray(() => () => () => [false, 0], 2)
 * // undefined
 *
 * resolveArray(() => () => () => [false, 0], 3)
 * // [false, 0]
 */
export declare function resolveArray(value: unknown, depth?: number): any[] | undefined;
