import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToRgbObjectCases } from './arrayToObject';
import { cmykObjectToRgbObjectCases } from './objectToObject';
import { cmykStringToRgbObjectCases } from './stringToObject';

export const fromCmykToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to RGB object', cases: cmykArrayToRgbObjectCases.valid },
  { name: 'Invalid: CMYK array to RGB object', cases: cmykArrayToRgbObjectCases.invalid },

  // from object
  { name: 'Valid: CMYK object to RGB object', cases: cmykObjectToRgbObjectCases.valid },
  { name: 'Invalid: CMYK object to RGB object', cases: cmykObjectToRgbObjectCases.invalid },

  // from string
  { name: 'Valid: CMYK string to RGB object', cases: cmykStringToRgbObjectCases.valid },
  { name: 'Invalid: CMYK string to RGB object', cases: cmykStringToRgbObjectCases.invalid },
];
