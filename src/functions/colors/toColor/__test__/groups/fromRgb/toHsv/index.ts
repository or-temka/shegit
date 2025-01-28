import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToHsvArrayCases } from './arrayToArray';
import { rgbArrayToHsvObjectCases } from './arrayToObject';
import { rgbArrayToHsvStringCases } from './arrayToString';
import { rgbObjectToHsvArrayCases } from './objectToArray';
import { rgbObjectToHsvObjectCases } from './ObjectToObject';
import { rgbObjectToHsvStringCases } from './objectToString';
import { rgbStringToHsvArrayCases } from './stringToArray';
import { rgbStringToHsvObjectCases } from './stringToObject';

export const fromRgbToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to HSV object', cases: rgbArrayToHsvObjectCases.valid },
  { name: 'Invalid: RGB array to HSV object', cases: rgbArrayToHsvObjectCases.invalid },

  { name: 'Valid: RGB array to HSV array', cases: rgbArrayToHsvArrayCases.valid },
  { name: 'Invalid: RGB array to HSV array', cases: rgbArrayToHsvArrayCases.invalid },

  { name: 'Valid: RGB array to HSV string', cases: rgbArrayToHsvStringCases.valid },
  { name: 'Invalid: RGB array to HSV string', cases: rgbArrayToHsvStringCases.invalid },

  // from object
  { name: 'Valid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.valid },
  { name: 'Invalid: RGB object to HSV object', cases: rgbObjectToHsvObjectCases.invalid },

  { name: 'Valid: RGB object to HSV array', cases: rgbObjectToHsvArrayCases.valid },
  { name: 'Invalid: RGB object to HSV array', cases: rgbObjectToHsvArrayCases.invalid },

  { name: 'Valid: RGB object to HSV string', cases: rgbObjectToHsvStringCases.valid },
  { name: 'Invalid: RGB object to HSV string', cases: rgbObjectToHsvStringCases.invalid },

  // from string
  { name: 'Valid: RGB string to HSV object', cases: rgbStringToHsvObjectCases.valid },
  { name: 'Invalid: RGB string to HSV object', cases: rgbStringToHsvObjectCases.invalid },

  { name: 'Valid: RGB string to HSV array', cases: rgbStringToHsvArrayCases.valid },
  { name: 'Invalid: RGB string to HSV array', cases: rgbStringToHsvArrayCases.invalid },
];
