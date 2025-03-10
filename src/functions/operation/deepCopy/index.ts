/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/**
 * #### Deep copy
 *
 * function that creates a complete copy of anything.
 *
 * @since 1.2.0
 * @category Operation
 * @param {T} value can be any type
 * @returns {T} copied value
 * @example
 *
 * const original = {
 *   a: 1,
 *   b: { c: 2 },
 *   d: [3, 4],
 *   e: true,
 * };
 *
 * const copied = deepCopy(original);
 * copied.a = 10;
 * copied.b.c = 20;
 * copied.d.push(12.3)
 *
 * console.log(original);
 * // { a: 1,
 * //   b: { c: 2 },
 * //   d: [3, 4],
 * //   e: true
 * // }
 *
 * console.log(copied);
 * // { a: 10,
 * //   b: { c: 20 },
 * //   d: [3, 4, 12.3],
 * //   e: true
 * // }
 */
export function deepCopy<T>(value: T): T {
  function _deepCopy<T>(value: T, seen: WeakMap<object, any>): T {
    if (value === null || typeof value !== 'object') {
      return value;
    }

    if (seen.has(value)) {
      return seen.get(value);
    }

    if (Array.isArray(value)) {
      const copy: any[] = [];
      seen.set(value, copy);
      value.forEach((item) => {
        copy.push(_deepCopy(item, seen));
      });
      return copy as unknown as T;
    }

    if (value instanceof Date) {
      const copy = new Date(value.getTime());
      seen.set(value, copy);
      return copy as unknown as T;
    }

    if (value instanceof RegExp) {
      const copy = new RegExp(value.source, value.flags);
      seen.set(value, copy);
      return copy as unknown as T;
    }

    if (value instanceof Map) {
      const copy = new Map();
      seen.set(value, copy);
      value.forEach((val, key) => {
        copy.set(key, _deepCopy(val, seen));
      });
      return copy as unknown as T;
    }

    if (value instanceof Set) {
      const copy = new Set();
      seen.set(value, copy);
      value.forEach((val) => {
        copy.add(_deepCopy(val, seen));
      });
      return copy as unknown as T;
    }

    if (value instanceof Promise) {
      return value;
    }

    if (value instanceof Error) {
      const copy = new (value.constructor as new (message: string) => Error)(value.message);
      copy.name = value.name;
      seen.set(value, copy);
      return copy as unknown as T;
    }

    if (typeof Buffer !== 'undefined' && value instanceof Buffer) {
      const copy = Buffer.from(value);
      seen.set(value, copy);
      return copy as unknown as T;
    }

    const copy = Object.create(Object.getPrototypeOf(value));
    seen.set(value, copy);

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = _deepCopy(value[key], seen);
      }
    }

    const symbolKeys = Object.getOwnPropertySymbols(value);
    for (const key of symbolKeys) {
      copy[key] = _deepCopy(value[key as keyof typeof value], seen);
    }

    return copy as T;
  }

  return _deepCopy(value, new WeakMap());
}
