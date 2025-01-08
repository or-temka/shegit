import { DEFAULT, DEFAULT_HEX_COMPONENT } from './constants';
import { HexStringToRgbObjInput, HexStringToRgbObjReturn } from './types';

const parseHexComponent = (component: string | number): number => parseInt(`${component}`, 16);

/**
 * #### HEX color string to RGB color object
 *
 * Converts HEX color "#`red` `green` `blue`" as an string
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HexStringToRgbObjInput} str HEX color string
 * @returns {HexStringToRgbObjReturn} RGBa color object
 * @example
 *
 * hexStringToRgbObj({r: 1, g: 2, b: 3})
 * //
 *
 * hexStringToRgbObj({r: 400, g: () => "+54", b: -20, a: 1})
 * //
 */
export function hexStringToRgbObj(
  str: HexStringToRgbObjInput = DEFAULT.input,
): HexStringToRgbObjReturn {
  let actual = str;

  if (typeof str === 'function') actual = str();
  if (typeof actual !== 'string') return DEFAULT.return;

  actual = actual.trim();
  const match = actual.match(/[a-fA-F0-9]/g)?.slice(0, 6);
  if (!match) return DEFAULT.return;

  let r = DEFAULT_HEX_COMPONENT;
  let g = DEFAULT_HEX_COMPONENT;
  let b = DEFAULT_HEX_COMPONENT;
  if (match.length === 6) {
    r = parseHexComponent(`${match[0]}${match[1]}`);
    g = parseHexComponent(`${match[2]}${match[3]}`);
    b = parseHexComponent(`${match[4]}${match[5]}`);
  } else if (match.length >= 3) {
    r = parseHexComponent(match[0] + match[0] || DEFAULT_HEX_COMPONENT);
    g = parseHexComponent(match[1] + match[1] || DEFAULT_HEX_COMPONENT);
    b = parseHexComponent(match[2] + match[2] || DEFAULT_HEX_COMPONENT);
  }

  return { r, g, b };
}

export { HexStringToRgbObjInput };
