import { CmykArray, CmykObjFunc, FuncCmykObj } from '../../../../types';
export type CmykObjToArrayInput = CmykObjFunc | FuncCmykObj;
export interface CmykObjToArrayDefault {
    input: CmykObjToArrayInput;
    return: CmykArray;
}
