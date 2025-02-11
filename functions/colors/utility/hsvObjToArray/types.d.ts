import { FuncHsvObj, HsvArray, HsvObjFunc } from '../../../../types';
export type HsvObjToArrayInput = HsvObjFunc | FuncHsvObj;
export interface HsvObjToArrayDefault {
    input: HsvObjToArrayInput;
    return: HsvArray;
}
