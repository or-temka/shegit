import { FunctionsConfig } from '@site/src/types';
import { FunctionNames } from './types';

const RESOLVE_LINK_PATH_CATEGORY = 'util/';

export const FUNCTIONS_CONFIG: FunctionsConfig<FunctionNames> = {
  delay: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}delay`,
  },

  getRandomValue: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}getRandomValue`,
  },

  isArray: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isArray`,
  },

  isBoolean: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isBoolean`,
  },

  isDate: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isDate`,
  },

  isEmpty: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isEmpty`,
  },

  isFunction: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isFunction`,
  },

  isNaN: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isNaN`,
  },

  isNull: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isNull`,
  },

  isNumber: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isNumber`,
  },

  isPlainObject: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isPlainObject`,
  },

  isString: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isString`,
  },

  isSymbol: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}isSymbol`,
  },

  noop: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}noop`,
  },
};
