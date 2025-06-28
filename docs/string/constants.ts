import { FunctionsConfig } from '@site/src/types';
import { FunctionNames } from './types';

const RESOLVE_LINK_PATH_CATEGORY = 'string/';

export const FUNCTIONS_CONFIG: FunctionsConfig<FunctionNames> = {
  capitalizeFirstLetter: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}capitalizeFirstLetter`,
    codeSandboxLink: 'https://codesandbox.io/p/sandbox/capitalizefirstletter-vnc737',
  },

  toCamelCase: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}toCamelCase`,
    codeSandboxLink: 'https://codesandbox.io/p/sandbox/tocamelcase-mkrdwc',
  },

  toSnakeCase: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}toSnakeCase`,
    codeSandboxLink: 'https://codesandbox.io/p/sandbox/tosnakecase-7rrd5d',
  },
};
