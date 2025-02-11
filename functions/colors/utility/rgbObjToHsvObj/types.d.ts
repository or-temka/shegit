import { FuncRgbaObj, HsvObj, RgbaObjFunc } from '../../../../types';
export type RgbObjToHsvObjInput = RgbaObjFunc | FuncRgbaObj;
export interface RgbObjToHsvObjDefault {
    input: RgbObjToHsvObjInput;
    return: HsvObj;
}
