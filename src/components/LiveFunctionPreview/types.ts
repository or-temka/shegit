/**
 * - `name` - Function name
 * - `optional` - Is the argument optional
 * - `default` - Value that will be displayed when the input field is empty
 * - `initial` - The value that will be displayed when a component first appears
 * - `type` - Type of expected value. It is then converted to this type or `undefined`
 */
export type Argument = {
  name: string;
  optional?: boolean;
  initial?: string;
  default?: string;
  type?: 'number';
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
