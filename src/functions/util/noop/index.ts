/**
 * #### Noop function
 *
 * only return `undefined`. nothing is done inside.
 *
 * @since 1.1.0
 * @category Util
 * @returns {undefined} `undefined`
 * @example
 *
 * noop()
 * // undefined
 * 
 * noop("some")
 * // undefined
 */
export function noop(...args: any[]): undefined {
  return undefined;
}
