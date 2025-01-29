import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToHsvObjectCases } from './arrayToObject';
import { cmykObjectToHsvArrayCases } from './objectToArray';
import { cmykObjectToHsvObjectCases } from './objectToObject';
import { cmykObjectToHsvStringCases } from './objectToString';
import { cmykStringToHsvObjectCases } from './stringToObject';

export const fromCmykToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.valid },
  { name: 'Invalid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.invalid },

  // from object
  { name: 'Valid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.valid },
  { name: 'Invalid: CMYK object to HSV object', cases: cmykObjectToHsvObjectCases.invalid },

  { name: 'Valid: CMYK object to HSV array', cases: cmykObjectToHsvArrayCases.valid },
  { name: 'Invalid: CMYK object to HSV array', cases: cmykObjectToHsvArrayCases.invalid },

  { name: 'Valid: CMYK object to HSV string', cases: cmykObjectToHsvStringCases.valid },
  { name: 'Invalid: CMYK object to HSV string', cases: cmykObjectToHsvStringCases.invalid },

  // from string
  { name: 'Valid: CMYK string to HSV object', cases: cmykStringToHsvObjectCases.valid },
  { name: 'Invalid: CMYK string to HSV object', cases: cmykStringToHsvObjectCases.invalid },
];
