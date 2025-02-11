"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveString = resolveString;
const isValidNumber = (value) => typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
const isString = (value) => typeof value === 'string';
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
function resolveString(value, depth) {
    if (depth !== undefined && !isValidNumber(depth))
        return undefined;
    if (depth && isValidNumber(depth) && depth < 0)
        return undefined;
    if (isString(value))
        return value;
    if (typeof value !== 'function')
        return undefined;
    if (depth === undefined) {
        let currentValue = value;
        while (typeof currentValue === 'function') {
            currentValue = currentValue();
        }
        return isString(currentValue) ? currentValue : undefined;
    }
    if (typeof depth === 'number' && depth > 0) {
        let currentValue = value;
        let currentDepth = 0;
        while (typeof currentValue === 'function' && currentDepth < depth) {
            currentValue = currentValue();
            currentDepth++;
        }
        if (typeof currentValue === 'function')
            return undefined;
        return isString(currentValue) ? currentValue : undefined;
    }
    return undefined;
}
