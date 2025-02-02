const isValidNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

const isSet = (value: unknown): value is Set<any> => value instanceof Set;

/**
 * #### Resolve number
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a Set if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Set<any> | undefined} resolved Set or `undefined`
 * @example
 *
 * resolveSet(new Set(["value1", "value2"]))
 * // Set { "value1", "value2" }
 *
 * resolveNumber(() => () => new Set([44, false]))
 * // Set { 44, false }
 *
 * resolveNumber("text")
 * // undefined
 *
 * resolveNumber(() => () => () => new Set(["name", 0]), 2)
 * // undefined
 *
 * resolveNumber(() => () => () => new Set(["name", 0]), 3)
 * // Set { "name", 0 }
 */
export function resolveSet(value: unknown, depth?: number): Set<any> | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isSet(value)) return value;
  if (typeof value !== 'function') return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (typeof currentValue === 'function') {
      currentValue = currentValue();
    }
    return isSet(currentValue) ? currentValue : undefined;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (typeof currentValue === 'function' && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (typeof currentValue === 'function') return undefined;

    return isSet(currentValue) ? currentValue : undefined;
  }

  return undefined;
}
