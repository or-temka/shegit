/**
 * #### Noop function
 *
 * only return `undefined`. nothing is done inside.
 *
 * @since 1.1.0
 * @category Helper
 * @returns {undefined} `undefined`
 * @example
 *
 * rgbObjToArray() // undefined
 * rgbObjToArray("some") // undefined
 */
export function noop(...args: any[]): undefined {
  return undefined;
}
