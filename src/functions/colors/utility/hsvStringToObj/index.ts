import { absoluteFloor } from '../../../number';
import { HsvObj } from '../../../../types';
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
import { HsvStringToObjInput } from './types';

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
 * #### HSV color string to object
 *
 * Converts HSV color "hsv(`hue`, `saturation`%, `value`%)" as an string
 * to a format object `{h: hue, s: saturation, v: value}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvStringToObjInput} string HSV color string
 * @returns {HsvObj} HSV color object
 * @example
 *
 * hsvStringToObj("hsv(1, 2%, 3%)")
 * // {h: 1, s: 2, v: 3}
 *
 * hsvStringToObj(() => "500, 12, -200")
 * // {h: 360, s: 12, v: 0}
 */
export function hsvStringToObj(string: HsvStringToObjInput = DEFAULT.input): HsvObj {
  let actual = string;

  if (typeof actual === 'function') actual = actual();
  if (typeof actual !== 'string') return DEFAULT.return;

  actual = actual.trim();

  const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 3);
  if (!match) return DEFAULT.return;

  const [h = '0', s = '0', v = '0'] = match;

  const hue = parseHueComponent(h);
  const saturation = parseSaturationComponent(s);
  const value = parseValueComponent(v);

  return {
    h: hue,
    s: saturation,
    v: value,
  };
}
