const isValidNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

const isFunction = (value: unknown): value is Function => typeof value === 'function';

/**
 * #### Resolve function
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a last function if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Function | undefined} resolved function or `undefined`
 * @example
 *
 * resolveFunction(() => 55)
 * // () => 55
 *
 * resolveFunction(() => () => () => "some")
 * // () => "some"
 *
 * resolveFunction("text")
 * // undefined
 *
 * resolveFunction(() => () => () => () => [0, false], 2)
 * // () => () => [0, false]
 *
 * resolveFunction(() => () => () => 33, 3)
 * // undefined
 */
export function resolveFunction(value: unknown, depth?: number): Function | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isFunction(value) && depth === 0) return value;
  if (isFunction(value) && !isFunction(value()) && depth === undefined) return value;
  if (!isFunction(value)) return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (isFunction(currentValue())) {
      currentValue = currentValue();
    }
    return currentValue;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (isFunction(currentValue()) && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (!isFunction(currentValue) || currentDepth < depth) return undefined;

    return currentValue;
  }

  return undefined;
}
