const isValidNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

const isArray = (value: unknown): value is any[] => Array.isArray(value);

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
export function resolveArray(value: unknown, depth?: number): any[] | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isArray(value)) return value;
  if (typeof value !== 'function') return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (typeof currentValue === 'function') {
      currentValue = currentValue();
    }
    return isArray(currentValue) ? currentValue : undefined;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (typeof currentValue === 'function' && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (typeof currentValue === 'function') return undefined;

    return isArray(currentValue) ? currentValue : undefined;
  }

  return undefined;
}
