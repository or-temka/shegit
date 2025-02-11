"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDate = resolveDate;
const isValidNumber = (value) => typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
const isDate = (value) => value instanceof Date;
const isFunction = (value) => typeof value === 'function';
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
function resolveDate(value, depth) {
    if (depth !== undefined && !isValidNumber(depth))
        return undefined;
    if (depth && isValidNumber(depth) && depth < 0)
        return undefined;
    if (isDate(value))
        return value;
    if (!isFunction(value))
        return undefined;
    if (depth === undefined) {
        let currentValue = value;
        while (isFunction(currentValue)) {
            currentValue = currentValue();
        }
        return isDate(currentValue) ? currentValue : undefined;
    }
    if (typeof depth === 'number' && depth > 0) {
        let currentValue = value;
        let currentDepth = 0;
        while (isFunction(currentValue) && currentDepth < depth) {
            currentValue = currentValue();
            currentDepth++;
        }
        if (isFunction(currentValue))
            return undefined;
        return isDate(currentValue) ? currentValue : undefined;
    }
    return undefined;
}
