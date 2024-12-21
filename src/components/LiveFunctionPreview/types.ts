export type Argument = {
  name: string;
  optional?: boolean;
};

export type LiveFunctionPreviewProps = {
  func: Function;
  name?: string;
  args?: Argument[];
  label?: string;
};

export type InputsVal = {
  [key: string]: string;
};
