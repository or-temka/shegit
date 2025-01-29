import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { cmykArrayToHsvArrayCases } from './arrayToArray';

import { cmykArrayToHsvObjectCases } from './arrayToObject';
import { cmykArrayToHsvStringCases } from './arrayToString';
import { cmykObjectToHsvArrayCases } from './objectToArray';
import { cmykObjectToHsvObjectCases } from './objectToObject';
import { cmykObjectToHsvStringCases } from './objectToString';
import { cmykStringToHsvArrayCases } from './stringToArray';
import { cmykStringToHsvObjectCases } from './stringToObject';

export const fromCmykToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.valid },
  { name: 'Invalid: CMYK array to HSV object', cases: cmykArrayToHsvObjectCases.invalid },

  { name: 'Valid: CMYK array to HSV array', cases: cmykArrayToHsvArrayCases.valid },
  { name: 'Invalid: CMYK array to HSV array', cases: cmykArrayToHsvArrayCases.invalid },

  { name: 'Valid: CMYK array to HSV string', cases: cmykArrayToHsvStringCases.valid },
  { name: 'Invalid: CMYK array to HSV string', cases: cmykArrayToHsvStringCases.invalid },

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

  { name: 'Valid: CMYK string to HSV array', cases: cmykStringToHsvArrayCases.valid },
  { name: 'Invalid: CMYK string to HSV array', cases: cmykStringToHsvArrayCases.invalid },
];
