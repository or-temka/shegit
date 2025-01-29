import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykObjectToHsvObjectCases } from './objectToObject';

export const fromCmykToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.valid },
  { name: 'Invalid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.invalid },

  // from string
];
