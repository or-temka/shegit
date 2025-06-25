import { FunctionsConfig } from '@site/src/types';
import { FunctionNames } from './types';

const RESOLVE_LINK_PATH_CATEGORY = 'colors/';

export const FUNCTIONS_CONFIG: FunctionsConfig<FunctionNames> = {
  toColor: {
    versions: {
      created: '1.0.1',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}toColor`,
    codeSandboxLink: 'https://codesandbox.io/p/sandbox/tocolor-lchcyv',
  },
};
