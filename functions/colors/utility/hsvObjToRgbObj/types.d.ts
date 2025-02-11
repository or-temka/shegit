import { FuncHsvObj, HsvObjFunc, RgbaObj } from '../../../../types';
export type HsvObjToRgbObjInput = HsvObjFunc | FuncHsvObj;
export interface HsvObjToRgbObjDefault {
    input: HsvObjToRgbObjInput;
    return: RgbaObj;
}
