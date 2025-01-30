const isValidNumber = (value: any): boolean =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

const isBoolean = (value: any): boolean => typeof value === 'boolean';

/**
 * #### Resolve boolean
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a boolean if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {any} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {boolean | undefined} resolved boolean or `undefined`
 * @example
 * resolveBoolean(true)
 * // true
 *
 * resolveBoolean(() => () => false)
 * // false
 *
 * resolveBoolean("text")
 * // undefined
 *
 * resolveBoolean(() => () => () => true, 2)
 * // undefined
 *
 * resolveBoolean(() => () => () => true, 3)
 * // true
 */
export function resolveBoolean(value: any, depth?: number): boolean | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isBoolean(value)) return value;
  if (typeof value !== 'function') return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (typeof currentValue === 'function') {
      currentValue = currentValue();
    }
    return isBoolean(currentValue) ? currentValue : undefined;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (typeof currentValue === 'function' && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (typeof currentValue === 'function') return undefined;

    return isBoolean(currentValue) ? currentValue : undefined;
  }

  return undefined;
}
