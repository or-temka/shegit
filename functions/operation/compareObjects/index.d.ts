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
export declare function compareObjects(obj1: Record<string, any>, obj2: Record<string, any>, returnType?: ReturnType): Record<string, any>;
export {};
