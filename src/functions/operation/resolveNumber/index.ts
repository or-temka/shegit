const isValidNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

/**
 * #### Resolve number
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a number if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {number | undefined} resolved number or `undefined`
 * @example
 *
 * resolveNumber(44.3)
 * // 44.3
 *
 * resolveNumber(() => () => 1494)
 * // 1494
 *
 * resolveNumber("text")
 * // undefined
 *
 * resolveNumber(() => () => () => 33, 2)
 * // undefined
 *
 * resolveNumber(() => () => () => 33, 3)
 * // 33
 */
export function resolveNumber(value: unknown, depth?: number): number | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isValidNumber(value)) return value;
  if (typeof value !== 'function') return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (typeof currentValue === 'function') {
      currentValue = currentValue();
    }
    return isValidNumber(currentValue) ? currentValue : undefined;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (typeof currentValue === 'function' && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (typeof currentValue === 'function') return undefined;

    return isValidNumber(currentValue) ? currentValue : undefined;
  }

  return undefined;
}
