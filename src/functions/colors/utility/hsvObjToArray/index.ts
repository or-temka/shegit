import { absoluteFloor } from '../../../number';
import { HsvArray, HsvObjFunc } from '../../../../types';
import {
  DEFAULT,
  DEFAULT_HSV_HUE_COMPONENT,
  DEFAULT_HSV_SATURATION_COMPONENT,
  DEFAULT_HSV_VALUE_COMPONENT,
  MAX_HSV_HUE_COMPONENT,
  MAX_HSV_SATURATION_COMPONENT,
  MAX_HSV_VALUE_COMPONENT,
  MIN_HSV_HUE_COMPONENT,
  MIN_HSV_SATURATION_COMPONENT,
  MIN_HSV_VALUE_COMPONENT,
} from './constants';
import { HsvObjToArrayInput } from './types';

const getComponentNumber = (component: any): number => {
  if (typeof component === 'function') component = component();
  return Number(component);
};

const parseHueComponent = (component: any): number => {
  const num = getComponentNumber(component);
  if (Number.isNaN(num)) return DEFAULT_HSV_HUE_COMPONENT;
  if (num < MIN_HSV_HUE_COMPONENT) return MIN_HSV_HUE_COMPONENT;
  if (num > MAX_HSV_HUE_COMPONENT) return MAX_HSV_HUE_COMPONENT;
  return absoluteFloor(num) || DEFAULT_HSV_HUE_COMPONENT;
};

const parseSaturationComponent = (component: any): number => {
  const num = getComponentNumber(component);
  if (Number.isNaN(num)) return DEFAULT_HSV_SATURATION_COMPONENT;
  if (num < MIN_HSV_SATURATION_COMPONENT) return MIN_HSV_SATURATION_COMPONENT;
  if (num > MAX_HSV_SATURATION_COMPONENT) return MAX_HSV_SATURATION_COMPONENT;
  return absoluteFloor(num) || DEFAULT_HSV_SATURATION_COMPONENT;
};

const parseValueComponent = (component: any): number => {
  const num = getComponentNumber(component);
  if (Number.isNaN(num)) return DEFAULT_HSV_VALUE_COMPONENT;
  if (num < MIN_HSV_VALUE_COMPONENT) return MIN_HSV_VALUE_COMPONENT;
  if (num > MAX_HSV_VALUE_COMPONENT) return MAX_HSV_VALUE_COMPONENT;
  return absoluteFloor(num) || DEFAULT_HSV_VALUE_COMPONENT;
};

/**
 * #### HSV color object to array
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a format array [`hue`, `saturation`, `value`].
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToArrayInput} obj HSV color object
 * @returns {HsvArray} HSV color array
 * @example
 *
 * hsvObjToArray({h: 1, s: 2, v: 3})
 * // [1, 2, 3]
 *
 * hsvObjToArray(() => {h: 400, s: () => "+54.3", v: -20})
 * // [360, 54, 0]
 */
export function hsvObjToArray(obj: HsvObjToArrayInput = DEFAULT.input): HsvArray {
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

  const h = parseHueComponent((actual as HsvObjFunc).h);
  const s = parseSaturationComponent((actual as HsvObjFunc).s);
  const v = parseValueComponent((actual as HsvObjFunc).v);
  return [h, s, v];
}

export { HsvObjToArrayInput };
