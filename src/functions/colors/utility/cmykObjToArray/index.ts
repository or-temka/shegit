import { absoluteFloor } from '../../../number';
import { CmykArray, CmykObjFunc } from '../../../../types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { CmykObjToArrayInput } from './types';

/**
 * #### CMYK color object to CMYK array
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a format array [`cyan`, `magenta`, `yellow`, `key`].
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToArrayInput} obj Cmyk color object
 * @returns {CmykArray} Cmyk color array
 * @example
 *
 * cmykObjToArray({c: 1, m: 2, y: 3, k: 4})
 * // [1, 2, 3, 4]
 *
 * cmykObjToArray({c: 150, m: () => "+54", y: -20, k: 34.3})
 * // [100, 54, 0, 34]
 */
export function cmykObjToArray(obj: CmykObjToArrayInput = DEFAULT.input): CmykArray {
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

  const parseComponent = (component: any): number => {
    if (typeof component === 'function') {
      component = component();
    }

    const num = Number(component);
    return Number.isNaN(num) || num < 0
      ? DEFAULT_COLOR_COMPONENT
      : num > 100
      ? 100
      : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
  };

  const c = parseComponent((actual as CmykObjFunc).c);
  const m = parseComponent((actual as CmykObjFunc).m);
  const y = parseComponent((actual as CmykObjFunc).y);
  const k = parseComponent((actual as CmykObjFunc).k);
  return [c, m, y, k];
}

export { CmykObjToArrayInput };
