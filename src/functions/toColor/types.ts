import { RgbObjToArrayInput } from '../rgbObjToArray';
import { Input } from '../rgbArrayToObj';
import { RgbaObj, RgbArray } from '../../types';

export type Color = Input | RgbObjToArrayInput;

// Delete 'object' when new major version
export type To = 'object' | 'rgb-object' | 'rgb-array';

export type ColorProp = Color | ((...args: any[]) => Color);

type DefaultReturn = RgbaObj;

export type ReturnColorType<T extends To> = T extends 'object' | 'rgb-object'
  ? RgbaObj
  : T extends 'rgb-array'
  ? RgbArray
  : DefaultReturn;

export interface Default {
  input: Input;
  return: DefaultReturn;
}
