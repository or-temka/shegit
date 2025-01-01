import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykObjectToCmykObjectCases } from './objectToObject';

export const fromCmykToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.valid },
  { name: 'Invalid: CMYK object to CMYK object', cases: cmykObjectToCmykObjectCases.invalid },

  // from string
];
