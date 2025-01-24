import { RgbaObj } from '../../../../types';
import { HsvObjToRgbObjInput } from './types';
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
import { absoluteFloor } from '../../../number';

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
 * #### HSV color object to RGB color object
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToRgbObjInput} obj HSV color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * hsvObjToRgbObj({ h: 220, s: 50, v: 80 })
 * // { r: 102, g: 136, b: 204, a: 1 }
 *
 * hsvObjToRgbObj(() => ({ h: '262.3', s: '+99.9', v: '2.6' }))
 * // { r: 2, g: 0, b: 5, a: 1 }
 *
 * hsvObjToRgbObj("some")
 * // { r: 0, g: 0, b: 0, a: 1 }
 */
export function hsvObjToRgbObj(obj: HsvObjToRgbObjInput = DEFAULT.input): RgbaObj {
  let actual = obj;

  if (typeof actual === 'function') actual = actual();

  if (typeof actual !== 'object' || Array.isArray(actual) || !actual) {
    return DEFAULT.return;
  }

  const s = parseSaturationComponent(actual.s) / 100;
  const v = parseValueComponent(actual.v) / 100;
  const h = parseHueComponent(actual.h);

  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let r;
  let g;
  let b;

  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h >= 180 && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h >= 240 && h < 300) {
    [r, g, b] = [x, 0, c];
  } else if (h >= 300 && h < 360) {
    [r, g, b] = [c, 0, x];
  } else if (h === 360) {
    [r, g, b] = [c, 0, 0];
  } else {
    [r, g, b] = [0, 0, 0];
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b, a: 1 };
}

export { HsvObjToRgbObjInput };
