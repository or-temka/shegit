const isValidNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]' &&
  Object.getPrototypeOf(value) !== null;

/**
 * #### Resolve object
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a object if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {object | undefined} resolved object or `undefined`
 * @example
 *
 * resolveObject({ name: "Alina" })
 * // { name: "Alina" }
 *
 * resolveObject(() => () => { some: 55 })
 * // { some: 55 }
 *
 * resolveObject([85, "text"])
 * // undefined
 *
 * resolveObject(() => () => () => ({ project: "shegit", majorVersion: 1 }), 2)
 * // undefined
 *
 * resolveObject(() => () => () => ({ project: "shegit", majorVersion: 1 }), 3)
 * // { project: "shegit", majorVersion: 1 }
 */
export function resolveObject(value: unknown, depth?: number): object | undefined {
  if (depth !== undefined && !isValidNumber(depth)) return undefined;
  if (depth && isValidNumber(depth) && depth < 0) return undefined;

  if (isObject(value)) return value;
  if (typeof value !== 'function') return undefined;

  if (depth === undefined) {
    let currentValue = value;
    while (typeof currentValue === 'function') {
      currentValue = currentValue();
    }
    return isObject(currentValue) ? currentValue : undefined;
  }

  if (typeof depth === 'number' && depth > 0) {
    let currentValue = value;
    let currentDepth = 0;

    while (typeof currentValue === 'function' && currentDepth < depth) {
      currentValue = currentValue();
      currentDepth++;
    }

    if (typeof currentValue === 'function') return undefined;

    return isObject(currentValue) ? currentValue : undefined;
  }

  return undefined;
}
