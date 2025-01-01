import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToCmykObjectCases } from './arrayToObject';
import { cmykObjectToCmykObjectCases } from './objectToObject';

export const fromCmykToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to CMYK object', cases: cmykArrayToCmykObjectCases.valid },
  { name: 'Invalid: CMYK array to CMYK object', cases: cmykArrayToCmykObjectCases.invalid },

  // from object
  { name: 'Valid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.valid },
  { name: 'Invalid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.invalid },

  // from string
];
