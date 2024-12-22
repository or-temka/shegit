import { useState } from 'react';
import { InputsVal, LiveFunctionPreviewProps } from './types';
import styles from './style.module.css';
import { getInputsValByArgs } from './utils';

function LiveFunctionPreview({
  name,
  func = () => {},
  args,
  label = 'Demo',
}: LiveFunctionPreviewProps) {
  const [inputsVal, setInputsVal] = useState<InputsVal>(getInputsValByArgs(args));

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
                onChange={(e) => setInputsVal((prev) => ({ ...prev, [arg.name]: e.target.value }))}
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
        return args.map((arg) => JSON.parse(inputsVal[arg.name] || null));
      } catch (error) {
        return [];
      }
    };
    const argsValue = parse();
    return <>{JSON.stringify(func(...argsValue))}</>;
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>

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
