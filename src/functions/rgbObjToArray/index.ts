import { RgbArray, RgbObjFunc } from '../../types';
import { DEFAULT, DEFAULT_COLOR_COMPONENT } from './constants';
import { RgbObjToArrayInput } from './types';

function roundDownAbsolute(value: number): number {
  return Math.floor(Math.abs(value));
}

export function rgbObjToArray(obj: RgbObjToArrayInput = DEFAULT.input): RgbArray {
  let actual = DEFAULT.input;
  const isObject = Object.prototype.toString.call(obj) === '[object Object]';

  if (!isObject) {
    const isFunction = typeof obj === 'function';
    if (!isFunction) return DEFAULT.return;
    actual = obj();
  } else {
    actual = obj;
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
      : roundDownAbsolute(num);
  };

  const r = parseComponent((actual as RgbObjFunc).r);
  const g = parseComponent((actual as RgbObjFunc).g);
  const b = parseComponent((actual as RgbObjFunc).b);
  return [r, g, b];
}
