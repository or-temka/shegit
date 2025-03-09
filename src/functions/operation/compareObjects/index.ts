type ReturnType = 'diff' | 'common';

/**
 * #### Compare objects
 *
 * Function that compares two objects and returns either the differences between them or
 * their common properties, based on a specified return type parameter.
 *
 * @since 1.2.0
 * @category Operation
 * @param {T} obj1 any object
 * @param {T} obj2 any object
 * @param {ReturnType} returnType can be of two values:
 * - `"diff"` - the function should return the differences between the two objects.
 * - `"common"` - the function should return the common properties of the two objects.
 *
 * If omitted, the function should default to returning the differences ("diff").
 * @returns {T} compared objects
 * @see {@link https://or-temka.github.io/shegit/docs/operation/compare-objects documentation}
 * @example
 *
 * const obj1 = { a: 1, b: 2, c: { d: 3 } };
   const obj2 = { a: 1, b: 3, c: { d: 4 } };
   compareObjects(obj1, obj2);
   // { b: 3, c: { d: 4 } }

   @example

   const obj1 = { a: 1, b: 2, c: { d: 3 } };
   const obj2 = { a: 1, b: 3, c: { d: 3 } };
   compareObjects(obj1, obj2, 'common');
   // { a: 1, c: { d: 3 } }
 */
export function compareObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  returnType: ReturnType = 'diff',
): Record<string, any> {
  const result: Record<string, any> = {};

  function compare(
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    obj1: Record<string, any>,
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    obj2: Record<string, any>,
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    result: Record<string, any>,
  ): Record<string, any> {
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        if (
          typeof obj1[key] === 'object' &&
          typeof obj2[key] === 'object' &&
          !Array.isArray(obj1[key]) &&
          !Array.isArray(obj2[key])
        ) {
          const nestedResult = compare(obj1[key], obj2[key], {});
          if (Object.keys(nestedResult).length > 0) {
            result[key] = nestedResult;
          }
        } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (returnType === 'common' && JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
            result[key] = obj1[key];
          } else if (
            returnType === 'diff' &&
            JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])
          ) {
            result[key] = obj2[key];
          }
        } else if (returnType === 'diff' && obj1[key] !== obj2[key]) {
          result[key] = obj2[key];
        } else if (returnType === 'common' && obj1[key] === obj2[key]) {
          result[key] = obj1[key];
        }
      } else if (returnType === 'diff') {
        result[key] = undefined;
      }
    }

    if (returnType === 'diff') {
      for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
          result[key] = obj2[key];
        }
      }
    }

    return result;
  }

  return compare(obj1, obj2, result);
}
