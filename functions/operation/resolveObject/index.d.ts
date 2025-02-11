/**
 * #### Resolve object
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a object if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {object | undefined} resolved object or `undefined`
 * @example
 *
 * resolveObject({ name: "Alina" })
 * // { name: "Alina" }
 *
 * resolveObject(() => () => { some: 55 })
 * // { some: 55 }
 *
 * resolveObject([85, "text"])
 * // undefined
 *
 * resolveObject(() => () => () => ({ project: "shegit", majorVersion: 1 }), 2)
 * // undefined
 *
 * resolveObject(() => () => () => ({ project: "shegit", majorVersion: 1 }), 3)
 * // { project: "shegit", majorVersion: 1 }
 */
export declare function resolveObject(value: unknown, depth?: number): object | undefined;
