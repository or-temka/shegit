import { absoluteFloor } from '../../../number';
import { CmykObj } from '../../../../types';
import {
  DEFAULT,
  DEFAULT_COLOR_COMPONENT,
  MAX_COMPONENT_VALUE,
  MIN_COMPONENT_VALUE,
} from './constants';
import { CmykArrayToObjInput } from './types';

/**
 * #### CMYK color array to object
 *
 * Converts CMYK color [`cyan`, `magenta`, `yellow`, `key`] as an array
 * to a format object {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykArrayToObjInput} array CMYK color array
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykArrayToObj([1, 2, 3, 4])
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykArrayToObj(["+44", -200, () => 12, 110])
 * // {c: 44, m: 0, y: 12, k: 100}
 */
export function cmykArrayToObj(array: CmykArrayToObjInput = DEFAULT.input): CmykObj {
  let actual = DEFAULT.input;

  if (Array.isArray(array)) {
    actual = array;
  } else if (typeof array === 'function') {
    actual = array();
    if (actual === null) {
      return DEFAULT.return;
    }
  } else {
    return DEFAULT.return;
  }

  const parseComponent = (component: any): number => {
    if (typeof component === 'function') {
      component = component();
    }

    const num = Number(component);
    return Number.isNaN(num) || num < 0
      ? MIN_COMPONENT_VALUE
      : num > MAX_COMPONENT_VALUE
      ? MAX_COMPONENT_VALUE
      : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
  };

  const c = parseComponent(actual[0]);
  const m = parseComponent(actual[1]);
  const y = parseComponent(actual[2]);
  const k = parseComponent(actual[3]);
  return { c, m, y, k };
}

export { CmykArrayToObjInput };
