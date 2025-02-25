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
export const deepCopy = <T>(value: T): T => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepCopy(item)) as unknown as T;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as unknown as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as unknown as T;
  }

  if (value instanceof Map) {
    const copy = new Map();
    value.forEach((val, key) => {
      copy.set(key, deepCopy(val));
    });
    return copy as unknown as T;
  }

  if (value instanceof Set) {
    const copy = new Set();
    value.forEach((val) => {
      copy.add(deepCopy(val));
    });
    return copy as unknown as T;
  }

  const copy = {} as { [key: string]: any };
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepCopy(value[key]);
    }
  }
  return copy as T;
};
