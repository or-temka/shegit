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
export function chunkArray<T>(array: T[], size: number = 2): T[][] {
  if (size <= 0 || Number.isNaN(size)) {
    return [array];
  }
  if (array.length === 0) {
    return [];
  }

  const chunkSize = Math.floor(size);
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
