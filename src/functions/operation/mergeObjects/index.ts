import { isPlainObject } from '../../util/isPlainObject';
import { deepCopy } from '../deepCopy';
import { PlainObject } from './types';

/**
 * #### Merge objects
 *
 * Deeply merges two plain objects. Properties from the first object take precedence over the second.
 * Returns a new merged object without mutating the inputs.
 *
 * @since 1.3.0
 * @category Util
 * @typeParam T - Type of the first object.
 * @typeParam U - Type of the second object.
 * @param obj1 - The primary object whose properties take priority.
 * @param obj2 - The secondary object whose properties are merged if not present in obj1.
 * @returns A new object containing all properties from obj1 and obj2, with obj1's values overriding.
 *
 * @throws {TypeError} If either obj1 or obj2 is not a plain object.
 * @throws {Error} If a circular reference is detected in obj1.
 *
 * @example
 *
 * // Basic merge:
 * mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
 * // { a: 1, b: 2, c: 4 }
 *
 * // Deep merge nested objects:
 * mergeObjects(
 *   { nested: { x: 10, y: 20 } },
 *   { nested: { y: 30, z: 40 }, extra: 5 }
 * );
 * // { nested: { x: 10, y: 20, z: 40 }, extra: 5 }
 *
 * // Merge arrays and additional properties:
 * mergeObjects(
 *   { list: [1, 2] },
 *   { list: [3, 4], meta: { valid: true } }
 * );
 * // { list: [1, 2], meta: { valid: true } }
 *
 * // Merge with Map and Set:
 * const map1 = new Map([['a', 1]]);
 * const set2 = new Set([2, 3]);
 * mergeObjects(
 *   { data: map1, tags: new Set(['x']) },
 *   { data: new Map([['b', 2]]), tags: set2 }
 * );
 * // { data: Map { 'a' => 1, 'b' => 2 }, tags: Set { 'x', 2, 3 } }
 *
 * // Deep merge with multi-level nesting and arrays:
 * mergeObjects(
 *   { config: { levels: [{ id: 1, val: 'one' }] } },
 *   { config: { levels: [{ id: 2, val: 'two' }], debug: true } }
 * );
 * // { config: { levels: [{ id: 1, val: 'one' }], debug: true } }
 */
export function mergeObjects<T extends PlainObject, U extends PlainObject>(
  obj1: T,
  obj2: U,
): T & Omit<U, keyof T> {
  if (!isPlainObject(obj1)) {
    throw new TypeError(
      `mergeObjects: expected a plain object for obj1, received ${
        obj1 === null ? 'null' : typeof obj1
      }`,
    );
  }
  if (!isPlainObject(obj2)) {
    throw new TypeError(
      `mergeObjects: expected a plain object for obj2, received ${
        obj2 === null ? 'null' : typeof obj2
      }`,
    );
  }

  const seen = new WeakSet<PlainObject>();

  function mergeDeep(o1: PlainObject, o2: PlainObject): PlainObject {
    // Prevent infinite recursion on circular references
    if (seen.has(o1)) {
      throw new Error('Circular reference detected in obj1');
    }
    seen.add(o1);

    const result: PlainObject = {};

    for (const key of Object.keys(o2)) {
      if (!(key in o1)) {
        result[key] = deepCopy(o2[key]);
      }
    }

    // Copy or merge keys from o1
    for (const key of Object.keys(o1)) {
      const v1 = o1[key];
      const v2 = o2[key];

      if (isPlainObject(v1)) {
        if (seen.has(v1)) {
          throw new Error('Circular reference detected in obj1');
        }
        if (isPlainObject(v2)) {
          result[key] = mergeDeep(v1, v2);
        } else {
          result[key] = mergeDeep(v1, {} as PlainObject);
        }
      } else {
        // For non-plain objects (arrays, Date, Map, Set, etc.), use deepCopy
        result[key] = deepCopy(v1);
      }
    }

    seen.delete(o1);
    return result;
  }

  return mergeDeep(obj1, obj2) as T & Omit<U, keyof T>;
}
