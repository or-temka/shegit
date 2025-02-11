import { CmykObjFunc, FuncCmykObj } from '../../../../types';
export type CmykObjToStringInput = CmykObjFunc | FuncCmykObj;
export interface CmykObjToStringDefault {
    input: CmykObjToStringInput;
    return: string;
}
