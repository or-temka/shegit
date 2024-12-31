import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToRgbArrayCases } from './arrayToArrayTemp';
import { rgbArrayToRgbObjectCases } from './arrayToObjectTemp';
import { rgbArrayToRgbStringCases } from './arrayToStringTemp';
import { rgbObjectToRgbArrayCases } from './objectToArrayTemp';
import { rgbObjectToRgbObjectCases } from './objectToObjectTemp';
import { rgbObjectToRgbStringCases } from './objectToStringTemp';
import { rgbStringToRgbArrayCases } from './stringToArrayTemp';
import { rgbStringToRgbObjectCases } from './stringToObjectTemp';
import { rgbStringToRgbStringCases } from './stringToStringTemp';

export const fromRgbToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to RGB object', cases: rgbArrayToRgbObjectCases.valid },
  { name: 'Invalid: RGB array to RGB object', cases: rgbArrayToRgbObjectCases.invalid },

  { name: 'Valid: RGB array to RGB string', cases: rgbArrayToRgbStringCases.valid },
  { name: 'Invalid: RGB array to RGB string', cases: rgbArrayToRgbStringCases.invalid },

  { name: 'Valid: RGB array to RGB array', cases: rgbArrayToRgbArrayCases.valid },
  { name: 'Invalid: RGB array to RGB array', cases: rgbArrayToRgbArrayCases.invalid },

  // from object
  { name: 'Valid: RGB object to RGB array', cases: rgbObjectToRgbArrayCases.valid },
  { name: 'Invalid: RGB object to RGB array', cases: rgbObjectToRgbArrayCases.invalid },

  { name: 'Valid: RGB object to RGB string', cases: rgbObjectToRgbStringCases.valid },
  { name: 'Invalid: RGB object to RGB string', cases: rgbObjectToRgbStringCases.invalid },

  { name: 'Valid: RGB object to RGB object', cases: rgbObjectToRgbObjectCases.valid },
  { name: 'Invalid: RGB object to RGB object', cases: rgbObjectToRgbObjectCases.invalid },

  // from string
  { name: 'Valid: RGB string to RGB object', cases: rgbStringToRgbObjectCases.valid },
  { name: 'Invalid: RGB string to RGB object', cases: rgbStringToRgbObjectCases.invalid },

  { name: 'Valid: RGB string to RGB array', cases: rgbStringToRgbArrayCases.valid },
  { name: 'Invalid: RGB string to RGB array', cases: rgbStringToRgbArrayCases.invalid },

  { name: 'Valid: RGB string to RGB string', cases: rgbStringToRgbStringCases.valid },
  { name: 'Invalid: RGB string to RGB string', cases: rgbStringToRgbStringCases.invalid },
];
