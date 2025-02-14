/**
 * #### To camel case
 *
 * Сonverts a string into camelCase format.
 *
 * @since 1.2.0
 * @category String
 * @param {string} str the input string
 * @returns {string | undefined} string in camel case format
 * @example
 *
 * toCamelCase("example")
 * // "example"
 *
 * toCamelCase("hello world")
 * // "helloWorld"
 *
 * toCamelCase("snake_case_example")
 * // "snakeCaseExample"
 *
 * toCamelCase("kebab-case-example")
 * // "kebabCaseExample"
 */
export function toCamelCase(str: string): string | undefined {
  if (typeof str !== 'string') return undefined;

  return str
    .replace(/([A-Z]+)/g, (m) => ` ${m.toLowerCase()}`)
    .trim()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (m) => m.toLowerCase());
}
