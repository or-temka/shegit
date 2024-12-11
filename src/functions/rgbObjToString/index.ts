import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { RgbObjFunc } from '../../types';
import { RgbObjToStringInput } from './types';
import { absoluteFloor } from '../absoluteFloor';

export function rgbObjToString(obj: RgbObjToStringInput = DEFAULT.input): string {
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
      : num > 255
      ? 255
      : absoluteFloor(num) || DEFAULT_COLOR_COMPONENT;
  };

  const r = parseComponent((actual as RgbObjFunc).r);
  const g = parseComponent((actual as RgbObjFunc).g);
  const b = parseComponent((actual as RgbObjFunc).b);

  return `rgb(${r}, ${g}, ${b})`;
}
