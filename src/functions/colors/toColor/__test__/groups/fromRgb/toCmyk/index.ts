import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToCmykObjectCases } from './ArrayToObject';
import { rgbObjectToCmykObjectCases } from './ObjectToObject';
import { rgbStringToCmykObjectCases } from './stringToObject';

export const fromRgbToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.valid },
  { name: 'Invalid: RGB array to CMYK object', cases: rgbArrayToCmykObjectCases.invalid },

  // from object
  { name: 'Valid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.valid },
  { name: 'Invalid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.invalid },

  // from string
  { name: 'Valid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.valid },
  { name: 'Invalid: RGB string to CMYK object', cases: rgbStringToCmykObjectCases.invalid },
];
