import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvArrayToHsvObjectCases } from './arrayToObject';
import { hsvObjectToHsvObjectCases } from './objectToObject';

export const fromHsvToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.valid },
  { name: 'Invalid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.invalid },

  // from object
  { name: 'Valid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.valid },
  { name: 'Invalid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.invalid },

  // from string
];
