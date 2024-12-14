/**
 * #### Absolute Floor
 *
 * Returns the largest integer less than or equal to the absolute value of the given number.
 *
 * @since 1.1.0
 * @category Math
 * @param {number} value the input number to process
 * @returns {number} the floored absolute value of the input
 * @example
 *
 * absoluteFloor(44.3) // 44
 * absoluteFloor(12.9) // 12
 * absoluteFloor(-6.8) // -6
 * absoluteFloor(-6.2) // -6
 * absoluteFloor(0) // 0
 */
export function absoluteFloor(value: number): number | undefined {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  return Math.floor(Math.abs(value));
}
