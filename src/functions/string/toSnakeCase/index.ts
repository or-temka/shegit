/**
 * #### To snake case
 *
 * Сonverts a string into `snake_case` format.
 *
 * @since 1.2.0
 * @category String
 * @param {string} str the input string
 * @returns {string | undefined} string in snake case format
 * @example
 *
 * toSnakeCase("example")
 * // "example"
 *
 * toSnakeCase("hello world")
 * // "hello_world"
 *
 * toSnakeCase("snake_case_example")
 * // "snake_case_example"
 *
 * toSnakeCase("kebab-case-example")
 * // "kebab_case_example"
 */
export function toSnakeCase(str: string): string | undefined {
  if (typeof str !== 'string') return undefined;

  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\s_]+/g, '_')
    .toLowerCase()
    .replace(/^_+|_+$/g, '')
    .replace(/_{2,}/g, '_');
}
