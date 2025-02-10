import { absoluteFloor } from '../../../number';
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
import { HsvArrayToObjInput, HsvArrayToObjReturn } from './types';

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
 * #### HSV color array to object
 *
 * Converts HSV color [`hue`, `saturation`, `value`] as an array
 * to a format object {h: `hue`, s: `saturation`, v: `value`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvArrayToObjInput} array HSV color array
 * @returns {HsvArrayToObjReturn} HSV color return
 * @example
 *
 * hsvArrayToObj([1, 2, 3])
 * // {h: 1, s: 2, v: 3}
 *
 * hsvArrayToObj(() => [400, () => "+54.3", -20])
 * // {h: 360, s: 54, v: 0}
 */
export function hsvArrayToObj(array: HsvArrayToObjInput = DEFAULT.input): HsvArrayToObjReturn {
  let actual = array;

  if (typeof array === 'function') actual = array();
  if (!Array.isArray(actual)) return DEFAULT.return;

  const h = parseHueComponent(actual[0]);
  const s = parseSaturationComponent(actual[1]);
  const v = parseValueComponent(actual[2]);
  return { h, s, v };
}

export { HsvArrayToObjInput, HsvArrayToObjReturn };
