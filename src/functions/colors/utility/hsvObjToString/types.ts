import { FuncHsvObj, HsvObjFunc, HsvString } from '../../../../types';

export type HsvObjToStringInput = HsvObjFunc | FuncHsvObj;
export type HsvObjToStringReturn = HsvString;
export interface HsvObjToStringDefault {
  input: HsvObjToStringInput;
  return: HsvObjToStringReturn;
}
