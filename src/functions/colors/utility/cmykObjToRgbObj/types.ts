import { CmykObjFunc, FuncCmykObj, RgbaObj } from '../../../../types';

export type CmykObjToRgbObjInput = CmykObjFunc | FuncCmykObj;
export interface CmykObjToRgbObjDefault {
  input: CmykObjToRgbObjInput;
  return: RgbaObj;
}
