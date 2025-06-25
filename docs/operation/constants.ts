import { FunctionsConfig } from '@site/src/types';
import { FunctionNames } from './types';

const RESOLVE_LINK_PATH_CATEGORY = 'operation/';

export const FUNCTIONS_CONFIG: FunctionsConfig<FunctionNames> = {
  chunkArray: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}chunkArray`,
  },

  compareObjects: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}compareObjects`,
  },

  deepCopy: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}deepCopy`,
  },

  mapObjectKeys: {
    versions: {
      created: '1.2.0',
      updated: '1.2.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}mapObjectKeys`,
  },

  mergeObjects: {
    versions: {
      created: '1.3.0',
      updated: '1.3.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}mergeObjects`,
  },

  resolveArray: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveArray`,
  },

  resolveBoolean: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveBoolean`,
  },

  resolveDate: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveDate`,
  },

  resolveFunction: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveFunction`,
  },

  resolveMap: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveMap`,
  },

  resolveNumber: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveNumber`,
  },

  resolveObject: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveObject`,
  },

  resolveSet: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveSet`,
  },

  resolveString: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveString`,
  },

  resolveValue: {
    versions: {
      created: '1.1.0',
      updated: '1.1.0',
      available: '1.3.0',
    },
    resourceLinkPath: `${RESOLVE_LINK_PATH_CATEGORY}resolveValue`,
  },
};
