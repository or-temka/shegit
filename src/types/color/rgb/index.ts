// Templates
export type RgbArrayTemplate<Component> = [Component?, Component?, Component?];
export type RgbObjTemplate<Component> = {
  r?: Component;
  g?: Component;
  b?: Component;
};

// Components
export type RgbComponent = number;
export type RgbFuncComponent = (...args: any[]) => RgbComponent;
export type RgbMultipleComponent = RgbFuncComponent | RgbComponent;

// Main
export type RgbArray = RgbArrayTemplate<RgbComponent>;
export type RgbArrayFunc = RgbArrayTemplate<RgbMultipleComponent>;
export type FuncRgbArray = (...args: any[]) => RgbArrayFunc;

export type RgbObj = RgbObjTemplate<RgbComponent>;
export type RgbObjFunc = RgbObjTemplate<RgbMultipleComponent>;
export type FuncRgbObj = (...args: any[]) => RgbObjFunc;
