import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToCmykArrayCases } from './arrayToArray';
import { rgbArrayToCmykObjectCases } from './ArrayToObject';
import { rgbObjectToCmykArrayCases } from './objectToArray';
import { rgbObjectToCmykObjectCases } from './ObjectToObject';
import { rgbStringToCmykArrayCases } from './stringToArray';
import { rgbStringToCmykObjectCases } from './stringToObject';

export const fromRgbToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.valid },
  { name: 'Invalid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.invalid },

  { name: 'Valid: RGB array to CMYK array', cases: rgbArrayToCmykArrayCases.valid },
  { name: 'Invalid: RGB array to CMYK array', cases: rgbArrayToCmykArrayCases.invalid },

  // from object
  { name: 'Valid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.valid },
  { name: 'Invalid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.invalid },

  { name: 'Valid: RGB object to CMYK object', cases: rgbObjectToCmykArrayCases.valid },
  { name: 'Invalid: RGB object to CMYK object', cases: rgbObjectToCmykArrayCases.invalid },

  // from string
  { name: 'Valid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.valid },
  { name: 'Invalid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.invalid },

  { name: 'Valid: RGB string to CMYK object', cases: rgbStringToCmykArrayCases.valid },
  { name: 'Invalid: RGB string to CMYK object', cases: rgbStringToCmykArrayCases.invalid },
];
