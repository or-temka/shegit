import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvObjectToRgbObjectCases } from './objectToObject';

export const fromHsvToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.valid },
  { name: 'Invalid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.invalid },

  // from string
];
