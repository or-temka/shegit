import { RgbObjToArrayInput, Input } from '../utility';
import { CmykObj, RgbaObj, RgbArray } from '../../../types';

export type Color = Input | RgbObjToArrayInput | string;

// TODO v2: Delete 'object'
export type To = 'object' | 'rgb-object' | 'rgb-array' | 'rgb-string' | 'cmyk-object';
export type FromColorType = undefined | 'rgb' | 'cmyk';

export type ColorProp = Color | ((...args: any[]) => Color);

type DefaultReturn = RgbaObj;

export type ReturnColorType<T extends To> = T extends 'object' | 'rgb-object'
  ? RgbaObj
  : T extends 'rgb-array'
  ? RgbArray
  : T extends 'rgb-string'
  ? string
  : T extends 'cmyk-object'
  ? CmykObj
  : DefaultReturn;

export interface Default {
  input: Input;
  return: DefaultReturn;
}
