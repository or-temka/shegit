import { Argument, InputsVal } from './types';

export function getInputsValByArgs(args: Argument[]) {
  const result: InputsVal = {};
  args.forEach((arg) => {
    result[arg.name] = '';
  });
  return result;
}
