import { FuncRgbObj, RgbObjFunc } from '../../types';

export type RgbObjToStringInput = RgbObjFunc | FuncRgbObj;
export interface RgbObjToStringDefault {
  input: RgbObjToStringInput;
  return: string;
}
