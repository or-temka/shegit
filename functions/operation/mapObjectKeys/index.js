"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObjectKeys = mapObjectKeys;
/**
 * #### Map object keys
 *
 * Function accepts an object and a transformation function,
 * applies the transformation function to each key in the object,
 * and returns a new object with the modified keys.
 * If value is not `object` type - function return `undefined`.
 *
 * @since 1.2.0
 * @category Operation
 * @param {T} obj object
 * @param {(key: keyof T) => string} transformFn function for transform object
 * @returns {object | undefined} mapped object
 * @example
 *
 * const original = { firstName: 'John', lastName: 'Doe', age: 30 };
 * const transformFn = (key) => key.toUpperCase();
 *
 * const result = mapObjectKeys(original, transformFn);
 * // { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 }
 */
function mapObjectKeys(obj, transformFn) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj))
        return undefined;
    let transformFunction = transformFn;
    if (typeof transformFunction !== 'function')
        transformFunction = (v) => v;
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = transformFunction(key);
            if (result.hasOwnProperty(newKey)) {
                throw new Error(`Duplicate key detected: ${newKey}`);
            }
            result[newKey] = obj[key];
        }
    }
    return result;
}
