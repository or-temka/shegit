import toKebabCase from './toKebabCase.js';

const LOG_TEXT_STYLE = {
  reset: '\x1b[0m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
};

function exec(func, arrayOfParams) {
  const functionName = toKebabCase(func.name);
  console.group(
    `${LOG_TEXT_STYLE.yellow}@shegit/${LOG_TEXT_STYLE.green}${functionName}${LOG_TEXT_STYLE.reset}`
  );

  const result = func(...arrayOfParams);

  const inputText = JSON.stringify(arrayOfParams);
  const resultText = JSON.stringify(result);
  console.log(
    `${LOG_TEXT_STYLE.gray}input:${LOG_TEXT_STYLE.white} ${inputText}${LOG_TEXT_STYLE.reset}`
  );
  console.log(
    `${LOG_TEXT_STYLE.gray}result:${LOG_TEXT_STYLE.white} ${resultText}${LOG_TEXT_STYLE.reset}`
  );

  console.groupEnd();
  console.log();
}

export default exec;
