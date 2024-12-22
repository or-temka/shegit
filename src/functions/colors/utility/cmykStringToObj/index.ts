import { absoluteFloor } from '../../../number';
import { CmykObj} from '../../../../types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT, MAX_COMPONENT_VALUE, MIN_COMPONENT_VALUE } from './constants';
import { CmykStringToObjInput } from './types';

const parseComponent = (component: string): number => {
  const num = Number(component);
  return Number.isNaN(num) || num < 0
    ? MIN_COMPONENT_VALUE
    : num > MAX_COMPONENT_VALUE
    ? MAX_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
};

/**
 * #### CMYK color string to object
 *
 * Converts CMYK color `cmyk(cyan, magenta, yellow, key)` as an string
 * to a format object `{c: cyan, m: magenta, y: yellow, k: key}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykStringToObjInput} string CMYK color string
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykStringToObj("cmyk(1, 2, 3, 4)")
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykStringToObj(() => "cmyka(500, 12, -200, 5.5)")
 * // {c: 100, m: 12, y: 0, k: 5}
 */
export function cmykStringToObj(string: CmykStringToObjInput = DEFAULT.input): CmykObj {
  let actual = string;

  if (typeof actual === 'function') actual = actual();
  if (typeof actual !== 'string') return DEFAULT.return;

  actual = actual.trim();

  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4);
  if (!match) return DEFAULT.return;

  const defaultStringComponent = `${DEFAULT_COLOR_COMPONENT}`
  const [c = defaultStringComponent, m = defaultStringComponent, y = defaultStringComponent, k = defaultStringComponent] = match;

  const cyan = parseComponent(c);
  const magenta = parseComponent(m);
  const yellow = parseComponent(y);
  const key = parseComponent(k);

  return {
    c: cyan,
    m: magenta,
    y: yellow,
    k: key,
  };
}
