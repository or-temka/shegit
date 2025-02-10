import { FuncRgbaObj, RgbaObjFunc } from '../../../../types';

export type RgbObjToHexStringInput = RgbaObjFunc | FuncRgbaObj;
export interface RgbObjToCmykObjDefault {
  input: RgbObjToHexStringInput;
  return: string;
}
