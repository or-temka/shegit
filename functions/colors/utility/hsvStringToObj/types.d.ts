import { FuncHsvString, HsvObj, HsvString } from '../../../../types';
export type HsvStringToObjInput = HsvString | FuncHsvString;
export interface HsvStringToObjDefault {
    input: HsvStringToObjInput;
    return: HsvObj;
}
