import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbObjectToHsvArrayCases } from './objectToArray';
import { rgbObjectToHsvObjectCases } from './ObjectToObject';
import { rgbObjectToHsvStringCases } from './objectToString';

export const fromRgbToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.valid },
  { name: 'Invalid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.invalid },

  { name: 'Valid: RGB object to HSV array', cases: rgbObjectToHsvArrayCases.valid },
  { name: 'Invalid: RGB object to HSV array', cases: rgbObjectToHsvArrayCases.invalid },

  { name: 'Valid: RGB object to HSV string', cases: rgbObjectToHsvStringCases.valid },
  { name: 'Invalid: RGB object to HSV string', cases: rgbObjectToHsvStringCases.invalid },

  // from string
];
