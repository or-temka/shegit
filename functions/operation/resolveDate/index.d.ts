/**
 * #### Resolve date
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a Date if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Date | undefined} resolved Date or `undefined`
 * @example
 * resolveDate(new Date(2024-12-25))
 * // Date object for 2024-12-25
 *
 * resolveDate(() => () => new Date(2025-01-13))
 * // Date object for 2025-01-13
 *
 * resolveDate("text")
 * // undefined
 *
 * resolveDate(() => () => () => new Date(1990-07-03), 2)
 * // undefined
 *
 * resolveDate(() => () => () => new Date(1990-07-03), 3)
 * // Date object for 1990-07-03
 */
export declare function resolveDate(value: unknown, depth?: number): Date | undefined;
