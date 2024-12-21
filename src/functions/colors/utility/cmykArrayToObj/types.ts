import { CmykArrayFunc, CmykObj, FuncCmykArray } from '../../../../types';

export type CmykArrayToObjInput = CmykArrayFunc | FuncCmykArray;
export interface Default {
  input: CmykArrayToObjInput;
  return: CmykObj;
}
