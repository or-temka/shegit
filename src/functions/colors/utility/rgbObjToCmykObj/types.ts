import { CmykObj, FuncRgbaObj, RgbaObjFunc } from '../../../../types';

export type RgbObjToCmykObjInput = RgbaObjFunc | FuncRgbaObj;
export interface RgbObjToCmykObjDefault {
  input: RgbObjToCmykObjInput;
  return: CmykObj;
}
