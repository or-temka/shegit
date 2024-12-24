import { CmykObj, CmykString, FuncCmykString } from '../../../../types';

export type CmykStringToObjInput = CmykString | FuncCmykString;
export interface CmykStringToObjDefault {
  input: CmykStringToObjInput;
  return: CmykObj;
}
