import { RgbObj } from '../../../../types';

export type HexStringToRgbObjInput = string | ((...args: any[]) => string);
export type HexStringToRgbObjReturn = RgbObj;
export interface HexStringToRgbObjDefault {
  input: HexStringToRgbObjInput;
  return: HexStringToRgbObjReturn;
}
