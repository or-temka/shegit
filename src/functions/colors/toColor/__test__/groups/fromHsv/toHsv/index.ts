import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvObjectToHsvObjectCases } from './objectToObject';

export const fromHsvToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.valid },
  { name: 'Invalid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.invalid },

  // from string
];
