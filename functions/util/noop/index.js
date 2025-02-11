"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = noop;
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
 * noop()
 * // undefined
 *
 * noop("some")
 * // undefined
 */
function noop(...args) {
    return undefined;
}
