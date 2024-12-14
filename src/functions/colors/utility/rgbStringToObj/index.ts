import { absoluteFloor } from '../../../number';
import { RgbaObj } from '../../../../types';
import { DEFAULT, DEFAULT_ALPHA_COMPONENT, DEFAULT_COLOR_COMPONENT } from './constants';
import { RgbStringToObjInput } from './types';

const parseComponent = (component: string): number => {
  const num = Number(component);
  return Number.isNaN(num) || num < 0
    ? DEFAULT_COLOR_COMPONENT
    : num > 255
    ? 255
    : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
};

const parseAlphaComponent = (alphaComponent: string): number => {
  const num = Number(alphaComponent);
  if (Number.isNaN(num)) return DEFAULT_ALPHA_COMPONENT;
  return num < 0 ? 0 : num > 1 ? 1 : num;
};

/**
 * #### RGB color string to object
 *
 * Converts RGB color `rgb(red, green, blue)` as an string
 * to a format object `{r: red, g: green, b: blue, a: alpha}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbStringToObjInput} string RGB color string
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * rgbStringToObj("rgb(1, 2, 3)")
 * // {r: 1, g: 2, b: 3, a: 1}
 *
 * rgbStringToObj(() => "rgba(500, 12, -200, 0.5)")
 * // {r: 255, g: 12, b: 0, a: 0.5}
 */
export function rgbStringToObj(string: RgbStringToObjInput = DEFAULT.input): RgbaObj {
  let actual = string;

  if (typeof actual === 'function') actual = actual();
  if (typeof actual !== 'string') return DEFAULT.return;

  actual = actual.trim();

  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4);
  if (!match) return DEFAULT.return;

  const [r = '0', g = '0', b = '0', a = '1'] = match;

  const red = parseComponent(r);
  const green = parseComponent(g);
  const blue = parseComponent(b);
  const alpha = parseAlphaComponent(a);

  return {
    r: red,
    g: green,
    b: blue,
    a: alpha,
  };
}
