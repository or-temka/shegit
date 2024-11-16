import { RgbArray, RgbArrayComponentValue, RgbObj } from '@types';

export type RgbFuncComponent = (...args: any[]) => RgbArrayComponentValue;
export type RgbArrayWithFuncValComponent = RgbArray[0] | RgbFuncComponent;
export type RgbArrayWithFuncVal = [
  RgbArrayWithFuncValComponent?,
  RgbArrayWithFuncValComponent?,
  RgbArrayWithFuncValComponent?,
];

export type FuncRgbArray = (...args: any[]) => RgbArrayWithFuncVal;

export interface Default {
  input: RgbArrayWithFuncVal;
  return: RgbObj;
}
