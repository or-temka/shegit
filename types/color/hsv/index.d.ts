export type HsvArrayTemplate<Component> = [Component?, Component?, Component?];
export type HsvObjTemplate<Component> = {
    h?: Component;
    s?: Component;
    v?: Component;
};
export type HsvComponent = number;
export type HsvFuncComponent = (...args: any[]) => HsvComponent;
export type HsvMultipleComponent = HsvFuncComponent | HsvComponent;
export type HsvArray = HsvArrayTemplate<HsvComponent>;
export type HsvArrayFunc = HsvArrayTemplate<HsvMultipleComponent>;
export type FuncHsvArray = (...args: any[]) => HsvArrayFunc;
export type HsvObj = HsvObjTemplate<HsvComponent>;
export type HsvObjFunc = HsvObjTemplate<HsvMultipleComponent>;
export type FuncHsvObj = (...args: any[]) => HsvObjFunc;
export type HsvString = string;
export type FuncHsvString = (...args: any[]) => HsvString;
