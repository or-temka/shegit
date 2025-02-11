/**
 * #### Resolve value
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a any if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {any | undefined} resolved any or `undefined`
 * @example
 *
 * resolveValue(44.3)
 * // 44.3
 *
 * resolveValue(() => () => false)
 * // false
 *
 * resolveValue("text")
 * // "text"
 *
 * resolveValue(() => () => () => { name: "Alina" }, 2)
 * // () => { name: "Alina" }
 *
 * resolveValue(() => () => () => { name: "Alina" }, 3)
 * // { name: "Alina" }
 *
 * resolveValue(() => () => () => { name: "Alina" }, 4)
 * // undefined
 */
export declare function resolveValue(value: unknown, depth?: number): any | undefined;
