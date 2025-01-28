import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvArrayToCmykObjectCases } from './arrayToObject';
import { hsvObjectToCmykArrayCases } from './objectToArray';
import { hsvObjectToCmykObjectCases } from './objectToObject';
import { hsvObjectToCmykStringCases } from './objectToString';

export const fromHsvToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to CMYK object', cases: hsvArrayToCmykObjectCases.valid },
  { name: 'Invalid: HSV array to CMYK object', cases: hsvArrayToCmykObjectCases.invalid },

  // from object
  { name: 'Valid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.valid },
  { name: 'Invalid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.invalid },

  { name: 'Valid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.valid },
  { name: 'Invalid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.invalid },

  { name: 'Valid: HSV object to CMYK string', cases: hsvObjectToCmykStringCases.valid },
  { name: 'Invalid: HSV object to CMYK string', cases: hsvObjectToCmykStringCases.invalid },

  // from string
];
