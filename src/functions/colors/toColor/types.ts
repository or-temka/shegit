import { RgbObjToArrayInput, Input } from '../utility';
import { CmykArray, CmykObj, CmykString, HexString, RgbaObj, RgbArray } from '../../../types';

export type Color = Input | RgbObjToArrayInput | string;

// TODO v2: Delete 'object'
export type To =
  | 'object'
  | 'rgb-object'
  | 'rgb-array'
  | 'rgb-string'
  | 'cmyk-object'
  | 'cmyk-array'
  | 'cmyk-string'
  | 'hex-string';
export type ColorType = 'rgb' | 'cmyk' | 'hex';

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
  : T extends 'cmyk-array'
  ? CmykArray
  : T extends 'cmyk-string'
  ? CmykString
  : T extends 'hex-string'
  ? HexString
  : DefaultReturn;

export interface Default {
  input: Input;
  return: DefaultReturn;
}

export type ColorTypeToMapping = Record<Exclude<ColorType, undefined>, To[]>;
