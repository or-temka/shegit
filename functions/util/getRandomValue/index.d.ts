/**
 * #### Get random value
 *
 * Function selects random items from array, object, map, set. If a primitive, it just returns the primitive as it is.
 *
 * @since 1.2.0
 * @category Util
 * @param {T | T[] | Set<T> | Map<any, T> | Record<string, T>} input the input value
 * @returns {T} selected random value
 *
 * @example
 * getRandomValue([1, 2, 3])
 * // 2
 *
 * getRandomValue([1, 2, 3])
 * // 3
 *
 * getRandomValue({ name: "Alina", age: 20, sex: "w" })
 * // "Alina"
 *
 * getRandomValue({ name: "Alina", age: 20, sex: "w" })
 * // 20
 *
 * getRandomValue(66)
 * // 66
 *
 * getRandomValue("text")
 * // "text"
 */
export declare function getRandomValue<T>(input: T | T[] | Set<T> | Map<any, T> | Record<string, T>): T;
