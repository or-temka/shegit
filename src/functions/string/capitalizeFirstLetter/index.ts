/**
 * #### Capitalize first letter
 *
 * Function takes a string and returns a new string with the first letter capitalized.
 *
 * @since 1.2.0
 * @category String
 * @param {string} str the input string
 * @returns {string | undefined} string with the first letter capitalized
 * @example
 *
 * capitalizeFirstLetter("example")
 * // "Example"
 *
 * capitalizeFirstLetter("my name")
 * // "My name"
 *
 * capitalizeFirstLetter("")
 * // ""
 *
 * capitalizeFirstLetter(" case")
 * // " Case"
 *
 * capitalizeFirstLetter("2hello")
 * // "2Hello"
 *
 * capitalizeFirstLetter("Test")
 * // "Test"
 */
export function capitalizeFirstLetter(str: string): string | undefined {
  if (typeof str !== 'string') return undefined;
  if (str.length === 0) return str;

  let firstCharIndex = 0;
  while (firstCharIndex < str.length && str[firstCharIndex] === ' ') {
    firstCharIndex++;
  }
  if (firstCharIndex >= str.length) return str;

  const firstChar = str[firstCharIndex].toUpperCase();

  return str.slice(0, firstCharIndex) + firstChar + str.slice(firstCharIndex + 1);
}
