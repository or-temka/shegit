import {
  DEFAULT,
  DEFAULT_COLOR_COMPONENT,
  DEFAULT_KEY_COMPONENT,
  MAX_COMPONENT_VALUE,
  MIN_COMPONENT_VALUE,
} from './constants';
import { CmykObjToStringInput } from './types';
import { absoluteFloor } from '../../../number';
import { CmykObjFunc } from '../../../../types';

const parseComponent = (component: any, isKey: boolean = false): number => {
  if (typeof component === 'function') {
    component = component();
  }

  const num = Number(component);

  if (isKey) {
    return Number.isNaN(num)
      ? DEFAULT_KEY_COMPONENT
      : num < 0
      ? MIN_COMPONENT_VALUE
      : num > MAX_COMPONENT_VALUE
      ? MAX_COMPONENT_VALUE
      : (absoluteFloor(num) as number);
  }
  return Number.isNaN(num) || num < 0
    ? MIN_COMPONENT_VALUE
    : num > MAX_COMPONENT_VALUE
    ? MAX_COMPONENT_VALUE
    : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
};

/**
 * #### CMYK color object to CMYK string
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a format string "cmyk(`cyan`%, `magenta`%, `yellow`%, `key`%)".
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToStringInput} obj CMYK color object
 * @returns {string} CMYK color string
 * @example
 *
 * cmykObjToString({c: 1, m: 2, y: 3, k: 4})
 * // "cmyk(1%, 2%, 3%, 4%)"
 *
 * cmykObjToString({c: 400, m: () => "+54", y: -20, k: 1})
 * // "cmyk(100%, 54%, 0%, 1%)"
 */
export function cmykObjToString(obj: CmykObjToStringInput = DEFAULT.input): string {
  let actual = DEFAULT.input;
  const isObject = Object.prototype.toString.call(obj) === '[object Object]';

  if (isObject) {
    actual = obj;
  } else if (typeof obj === 'function') {
    actual = obj();
    if (actual === null) {
      return DEFAULT.return;
    }
  } else {
    return DEFAULT.return;
  }

  const c = parseComponent((actual as CmykObjFunc).c);
  const m = parseComponent((actual as CmykObjFunc).m);
  const y = parseComponent((actual as CmykObjFunc).y);
  const k = parseComponent((actual as CmykObjFunc).k, true);

  return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
}
