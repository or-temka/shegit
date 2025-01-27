import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvObjectToRgbObjectCases } from './objectToObject';
import { hsvObjectToRgbArrayCases } from './objectToArray';
import { hsvObjectToRgbStringCases } from './objectToString';

export const fromHsvToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.valid },
  { name: 'Invalid: HSV object to RGB object', cases: hsvObjectToRgbObjectCases.invalid },

  { name: 'Valid: HSV object to RGB array', cases: hsvObjectToRgbArrayCases.valid },
  { name: 'Invalid: HSV object to RGB array', cases: hsvObjectToRgbArrayCases.invalid },

  { name: 'Valid: HSV object to RGB string', cases: hsvObjectToRgbStringCases.valid },
  { name: 'Invalid: HSV object to RGB string', cases: hsvObjectToRgbStringCases.invalid },

  // from string
];
