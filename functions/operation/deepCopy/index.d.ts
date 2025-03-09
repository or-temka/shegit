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
export declare function deepCopy<T>(value: T): T;
