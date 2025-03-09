/**
 * #### Array chunking
 *
 * Function that splits an array into smaller arrays ("chunks") of a specified size.
 *
 * @since 1.2.0
 * @category Operation
 * @param {T[]} array array
 * @param {number} size chunk size
 * @returns {T[][]} array
 * @see {@link https://or-temka.github.io/shegit/docs/operation/chunk-array documentation}
 * @example
 * chunkArray([1, 2, 3, 4, 5])
 * // [[1, 2], [3, 4], [5]]
 *
 * chunkArray([1, 2, 3, 4, 5], 1)
 * // [[1], [2], [3], [4], [5]]
 *
 * chunkArray([[1, 2, 3], 4, 5, 6, [7, 8]], 3)
 * // [[[1, 2, 3], 4, 5], [6, [7, 8]]]
 */
export declare function chunkArray<T>(array: T[], size?: number): T[][];
