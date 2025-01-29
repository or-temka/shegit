import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvArrayToHsvArrayCases } from './arrayToArray';
import { hsvArrayToHsvObjectCases } from './arrayToObject';
import { hsvObjectToHsvObjectCases } from './objectToObject';
import { hsvStringToHsvObjectCases } from './stringToObject';

export const fromHsvToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.valid },
  { name: 'Invalid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.invalid },

  { name: 'Valid: HSV array to HSV array', cases: hsvArrayToHsvArrayCases.valid },
  { name: 'Invalid: HSV array to HSV array', cases: hsvArrayToHsvArrayCases.invalid },

  // from object
  { name: 'Valid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.valid },
  { name: 'Invalid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.invalid },

  // from string
  { name: 'Valid: HSV string to HSV object', cases: hsvStringToHsvObjectCases.valid },
  { name: 'Invalid: HSV string to HSV object', cases: hsvStringToHsvObjectCases.invalid },
];
