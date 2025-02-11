export type CmykArrayTemplate<Component> = [Component?, Component?, Component?, Component?];
export type CmykObjTemplate<Component> = {
    c?: Component;
    m?: Component;
    y?: Component;
    k?: Component;
};
export type CmykComponent = number;
export type CmykFuncComponent = (...args: any[]) => CmykComponent;
export type CmykMultipleComponent = CmykFuncComponent | CmykComponent;
export type CmykArray = CmykArrayTemplate<CmykComponent>;
export type CmykArrayFunc = CmykArrayTemplate<CmykMultipleComponent>;
export type FuncCmykArray = (...args: any[]) => CmykArrayFunc;
export type CmykObj = CmykObjTemplate<CmykComponent>;
export type CmykObjFunc = CmykObjTemplate<CmykMultipleComponent>;
export type FuncCmykObj = (...args: any[]) => CmykObjFunc;
export type CmykString = string;
export type FuncCmykString = (...args: any[]) => CmykString;
