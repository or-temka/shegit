import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToCmykArrayCases } from './arrayToArray';
import { rgbArrayToCmykObjectCases } from './arrayToObject';
import { rgbArrayToCmykStringCases } from './arrayToString';
import { rgbObjectToCmykArrayCases } from './objectToArray';
import { rgbObjectToCmykObjectCases } from './objectToObject';
import { rgbObjectToCmykStringCases } from './objectToString';
import { rgbStringToCmykArrayCases } from './stringToArray';
import { rgbStringToCmykObjectCases } from './stringToObject';
import { rgbStringToCmykStringCases } from './stringToString';

export const fromRgbToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.valid },
  { name: 'Invalid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.invalid },

  { name: 'Valid: RGB array to CMYK array', cases: rgbArrayToCmykArrayCases.valid },
  { name: 'Invalid: RGB array to CMYK array', cases: rgbArrayToCmykArrayCases.invalid },

  { name: 'Valid: RGB array to CMYK string', cases: rgbArrayToCmykStringCases.valid },
  { name: 'Invalid: RGB array to CMYK string', cases: rgbArrayToCmykStringCases.invalid },

  // from object
  { name: 'Valid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.valid },
  { name: 'Invalid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.invalid },

  { name: 'Valid: RGB object to CMYK array', cases: rgbObjectToCmykArrayCases.valid },
  { name: 'Invalid: RGB object to CMYK array', cases: rgbObjectToCmykArrayCases.invalid },

  { name: 'Valid: RGB object to CMYK string', cases: rgbObjectToCmykStringCases.valid },
  { name: 'Invalid: RGB object to CMYK string', cases: rgbObjectToCmykStringCases.invalid },

  // from string
  { name: 'Valid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.valid },
  { name: 'Invalid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.invalid },

  { name: 'Valid: RGB string to CMYK array', cases: rgbStringToCmykArrayCases.valid },
  { name: 'Invalid: RGB string to CMYK array', cases: rgbStringToCmykArrayCases.invalid },

  { name: 'Valid: RGB string to CMYK string', cases: rgbStringToCmykStringCases.valid },
  { name: 'Invalid: RGB string to CMYK string', cases: rgbStringToCmykStringCases.invalid },
];
