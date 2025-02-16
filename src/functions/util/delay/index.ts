const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

/**
 * #### Delay
 *
 * Creates a delay for a specified number of milliseconds and returns a resolved promise after the delay.
 *
 * @since 1.2.0
 * @category Util
 * @param {number} ms the input milliseconds
 * @returns {Promise<void>} Promise
 *
 * @example
 * // Example 1: Wait for 2 seconds
 * delay(2000).then(() => {
 *   console.log('2 seconds have passed');
 * });
 *
 * // Example 2: Default delay (0 milliseconds)
 * delay().then(() => {
 *   console.log('No delay');
 * });
 *
 * // Example 3: Wait for 1 second using async/await
 * (async () => {
 *   await delay(1000);
 *   console.log('1 second has passed');
 * })();
 */
export function delay(ms: number = 0): Promise<void> {
  const milliseconds = isNumber(ms) ? ms : 0;

  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
