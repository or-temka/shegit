import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToRgbArrayCases } from './arrayToArray';
import { cmykArrayToRgbObjectCases } from './arrayToObject';
import { cmykArrayToRgbStringCases } from './arrayToString';
import { cmykObjectToRgbArrayCases } from './objectToArray';
import { cmykObjectToRgbObjectCases } from './objectToObject';
import { cmykObjectToRgbStringCases } from './objectToString';
import { cmykStringToRgbArrayCases } from './stringToArray';
import { cmykStringToRgbObjectCases } from './stringToObject';
import { cmykStringToRgbStringCases } from './stringToString';

export const fromCmykToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to RGB object', cases: cmykArrayToRgbObjectCases.valid },
  { name: 'Invalid: CMYK array to RGB object', cases: cmykArrayToRgbObjectCases.invalid },

  { name: 'Valid: CMYK array to RGB array', cases: cmykArrayToRgbArrayCases.valid },
  { name: 'Invalid: CMYK array to RGB array', cases: cmykArrayToRgbArrayCases.invalid },

  { name: 'Valid: CMYK array to RGB string', cases: cmykArrayToRgbStringCases.valid },
  { name: 'Invalid: CMYK array to RGB string', cases: cmykArrayToRgbStringCases.invalid },

  // from object
  { name: 'Valid: CMYK object to RGB object', cases: cmykObjectToRgbObjectCases.valid },
  { name: 'Invalid: CMYK object to RGB object', cases: cmykObjectToRgbObjectCases.invalid },

  { name: 'Valid: CMYK object to RGB array', cases: cmykObjectToRgbArrayCases.valid },
  { name: 'Invalid: CMYK object to RGB array', cases: cmykObjectToRgbArrayCases.invalid },

  { name: 'Valid: CMYK object to RGB string', cases: cmykObjectToRgbStringCases.valid },
  { name: 'Invalid: CMYK object to RGB string', cases: cmykObjectToRgbStringCases.invalid },

  // from string
  { name: 'Valid: CMYK string to RGB object', cases: cmykStringToRgbObjectCases.valid },
  { name: 'Invalid: CMYK string to RGB object', cases: cmykStringToRgbObjectCases.invalid },

  { name: 'Valid: CMYK string to RGB array', cases: cmykStringToRgbArrayCases.valid },
  { name: 'Invalid: CMYK string to RGB array', cases: cmykStringToRgbArrayCases.invalid },

  { name: 'Valid: CMYK string to RGB string', cases: cmykStringToRgbStringCases.valid },
  { name: 'Invalid: CMYK string to RGB string', cases: cmykStringToRgbStringCases.invalid },
];
