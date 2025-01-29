import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToHsvObjectCases } from './arrayToObject';
import { cmykObjectToHsvObjectCases } from './objectToObject';

export const fromCmykToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.valid },
  { name: 'Invalid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.invalid },

  // from object
  { name: 'Valid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.valid },
  { name: 'Invalid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.invalid },

  // from string
];
