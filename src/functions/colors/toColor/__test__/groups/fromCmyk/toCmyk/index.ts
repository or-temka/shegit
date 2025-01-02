import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToCmykArrayCases } from './arrayToArray';
import { cmykArrayToCmykObjectCases } from './arrayToObject';
import { cmykObjectToCmykArrayCases } from './objectToArray';
import { cmykObjectToCmykObjectCases } from './objectToObject';
import { cmykStringToCmykArrayCases } from './stringToArray';
import { cmykStringToCmykObjectCases } from './stringToObject';

export const fromCmykToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to CMYK object', cases: cmykArrayToCmykObjectCases.valid },
  { name: 'Invalid: CMYK array to CMYK object', cases: cmykArrayToCmykObjectCases.invalid },

  { name: 'Valid: CMYK array to CMYK array', cases: cmykArrayToCmykArrayCases.valid },
  { name: 'Invalid: CMYK array to CMYK array', cases: cmykArrayToCmykArrayCases.invalid },

  // from object
  { name: 'Valid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.valid },
  { name: 'Invalid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.invalid },

  { name: 'Valid: CMYK object to CMYK array', cases: cmykObjectToCmykArrayCases.valid },
  { name: 'Invalid: CMYK object to CMYK array', cases: cmykObjectToCmykArrayCases.invalid },

  // from string
  { name: 'Valid: CMYK string to CMYK object', cases: cmykStringToCmykObjectCases.valid },
  { name: 'Invalid: CMYK string to CMYK object', cases: cmykStringToCmykObjectCases.invalid },

  { name: 'Valid: CMYK string to CMYK array', cases: cmykStringToCmykArrayCases.valid },
  { name: 'Invalid: CMYK string to CMYK array', cases: cmykStringToCmykArrayCases.invalid },
];
