import { FuncHsvArray, HsvArrayFunc, HsvObj } from '../../../../types';

export type HsvArrayToObjInput = HsvArrayFunc | FuncHsvArray;
export type HsvArrayToObjReturn = HsvObj;
export interface HsvArrayToObjDefault {
  input: HsvArrayToObjInput;
  return: HsvArrayToObjReturn;
}
