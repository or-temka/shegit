import { isEmpty } from 'shegit-beta';
import { Argument, InputsVal } from './types';

export function getInputsValByArgs(args: Argument[]) {
  const result: InputsVal = {};
  args.forEach((arg) => {
    result[arg.name] = arg.initial || '';
  });
  return result;
}

export const getFormattedAgsValues = (argsValue: any[], args: Argument[]) =>
  argsValue.map((v, index) => {
    if (args[index].type === 'function') {
      return isEmpty(v) ? eval(args[index].default) : eval(v);
    }
    return v;
  });

export const getStyleForArgumentInput = (arg: Argument): React.CSSProperties => {
  const argStyle = arg.style;
  if (!argStyle) return {};

  return {
    maxWidth: argStyle.width || undefined,
  };
};
