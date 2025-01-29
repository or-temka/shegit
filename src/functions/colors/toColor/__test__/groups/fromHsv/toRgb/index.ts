import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvObjectToRgbObjectCases } from './objectToObject';
import { hsvObjectToRgbArrayCases } from './objectToArray';
import { hsvObjectToRgbStringCases } from './objectToString';
import { hsvArrayToRgbObjectCases } from './arrayToObject';
import { hsvStringToRgbObjectCases } from './stringToObject';
import { hsvArrayToRgbArrayCases } from './arrayToArray';
import { hsvArrayToRgbStringCases } from './arrayToString';
import { hsvStringToRgbArrayCases } from './stringToArray';
import { hsvStringToRgbStringCases } from './stringToString';

export const fromHsvToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to RGB object', cases: hsvArrayToRgbObjectCases.valid },
  { name: 'Invalid: HSV array to RGB object', cases: hsvArrayToRgbObjectCases.invalid },

  { name: 'Valid: HSV array to RGB array', cases: hsvArrayToRgbArrayCases.valid },
  { name: 'Invalid: HSV array to RGB array', cases: hsvArrayToRgbArrayCases.invalid },

  { name: 'Valid: HSV array to RGB string', cases: hsvArrayToRgbStringCases.valid },
  { name: 'Invalid: HSV array to RGB string', cases: hsvArrayToRgbStringCases.invalid },

  // from object
  { name: 'Valid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.valid },
  { name: 'Invalid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.invalid },

  { name: 'Valid: HSV object to RGB array', cases: hsvObjectToRgbArrayCases.valid },
  { name: 'Invalid: HSV object to RGB array', cases: hsvObjectToRgbArrayCases.invalid },

  { name: 'Valid: HSV object to RGB string', cases: hsvObjectToRgbStringCases.valid },
  { name: 'Invalid: HSV object to RGB string', cases: hsvObjectToRgbStringCases.invalid },

  // from string
  { name: 'Valid: HSV string to RGB object', cases: hsvStringToRgbObjectCases.valid },
  { name: 'Invalid: HSV string to RGB object', cases: hsvStringToRgbObjectCases.invalid },

  { name: 'Valid: HSV string to RGB array', cases: hsvStringToRgbArrayCases.valid },
  { name: 'Invalid: HSV string to RGB array', cases: hsvStringToRgbArrayCases.invalid },

  { name: 'Valid: HSV string to RGB string', cases: hsvStringToRgbStringCases.valid },
  { name: 'Invalid: HSV string to RGB string', cases: hsvStringToRgbStringCases.invalid },
];
