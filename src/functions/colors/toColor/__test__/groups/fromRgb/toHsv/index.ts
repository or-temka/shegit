import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbObjectToHsvObjectCases } from './ObjectToObject';

export const fromRgbToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.valid },
  { name: 'Invalid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.invalid },

  // from string
];
