/**
 * #### Resolve map
 *
 * This function should accept any input type, execute functions if encountered, and ultimately return a Map if possible.
 *
 * @since 1.1.0
 * @category Operation
 * @param {unknown} value can be any type
 * @param {number} depth determines the depth of function resolution
 * - If `number`, specifies the maximum depth for function execution.
 * - If unless stated or `undefined`, resolves functions indefinitely until a non-function value is found.
 * @returns {Map<any, any> | undefined} resolved Map or `undefined`
 * @example
 *
 * resolveMap(new Map([["key1", "value1"], ["key2", "value2"]]))
 * // Map { "key1" => "value1", "key2" => "value2" }
 *
 * resolveNumber("text")
 * // undefined
 *
 * resolveNumber(() => () => () => new Map([["name", "Alina"], ["age", "23"]]), 2)
 * // undefined
 *
 * resolveNumber(() => () => () => new Map([["name", "Alina"], ["age", "23"]]), 3)
 * // Map { "name" => "Alina", "age" => 23 }
 */
export declare function resolveMap(value: unknown, depth?: number): Map<any, any> | undefined;
