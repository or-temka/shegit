"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveValue = resolveValue;
const isValidNumber = (value) => typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
const isFunction = (value) => typeof value === 'function';
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
function resolveValue(value, depth) {
    if (depth !== undefined && !isValidNumber(depth))
        return undefined;
    if (depth && isValidNumber(depth) && depth < 0)
        return undefined;
    if ((!isFunction(value) && !depth) || depth === 0)
        return value;
    if (depth === undefined) {
        let currentValue = value;
        while (isFunction(currentValue)) {
            currentValue = currentValue();
        }
        return currentValue;
    }
    if (depth > 0) {
        let currentValue = value;
        let currentDepth = 0;
        while (isFunction(currentValue) && currentDepth < depth) {
            currentValue = currentValue();
            currentDepth++;
        }
        if (currentDepth < depth)
            return undefined;
        return currentValue;
    }
    return undefined;
}
