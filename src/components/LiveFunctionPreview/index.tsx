import { useState } from 'react';
import { Argument, InputsVal, LiveFunctionPreviewProps } from './types';
import styles from './style.module.css';
import { getInputsValByArgs } from './utils';

function LiveFunctionPreview({
  name,
  func = () => {},
  args,
  label = 'Demo',
}: LiveFunctionPreviewProps) {
  const [inputsVal, setInputsVal] = useState<InputsVal>(getInputsValByArgs(args));
  const [isHasError, setIsHasError] = useState(false);

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>, arg: Argument) => {
    let value = e.target.value;

    if (arg.type === 'number') {
      value = Number.isNaN(+value) || value === '' ? undefined : value;
    }

    setInputsVal((prev) => ({ ...prev, [arg.name]: value }));
  };

  const Inputs = () => {
    return (
      <>
        {args?.map((arg, index) => {
          const showSeparator = index < args.length - 1;
          return (
            <div key={index} className={styles.inputContainer}>
              <input
                placeholder={arg.name}
                className={styles.input}
                value={inputsVal[arg.name]}
                onChange={(e) => setInputValue(e, arg)}
              ></input>{' '}
              {showSeparator && ','}
            </div>
          );
        })}
      </>
    );
  };

  const Result = () => {
    const parse = () => {
      try {
        return args.map((arg) => JSON.parse(inputsVal[arg.name] || arg.default || null));
      } catch (error) {
        return [];
      }
    };
    const argsValue = parse();
    try {
      const functionResult = func(...argsValue);

      const result =
        typeof functionResult !== 'undefined' ? (
          <>{JSON.stringify(functionResult)}</>
        ) : (
          <>undefined</>
        );
      if (isHasError) setIsHasError(false);
      return result;
    } catch (error) {
      if (!isHasError) setIsHasError(true);
      return <>"Error"</>;
    }
  };

  return (
    <div className={styles.container}>
      <span
        className={styles.label}
        style={{ background: isHasError ? 'rgb(216,106,93)' : undefined }}
      >
        {isHasError ? 'ошибка' : label}
      </span>

      <pre className={[styles.code, styles.codeContainer].join(' ')}>
        <span className={styles.functionInput}>
          {name || func.name}({Inputs()})
        </span>
      </pre>

      <pre className={[styles.code, styles.resultContainer].join(' ')}>{Result()}</pre>
    </div>
  );
}

export default LiveFunctionPreview;
