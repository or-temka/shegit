import { FunctionsConfig } from '@site/src/types';
import { FunctionNames } from './types';

const RESOLVE_LINK_PATH_CATEGORY = 'number/';

export const FUNCTIONS_CONFIG: FunctionsConfig<FunctionNames> = {
  absoluteFloor: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}absoluteFloor`,
    codeSandboxLink: 'https://codesandbox.io/p/sandbox/absolutefloor-zm9c94',
  },
};
