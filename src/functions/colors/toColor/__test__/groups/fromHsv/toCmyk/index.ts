import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvArrayToCmykArrayCases } from './arrayToArray';
import { hsvArrayToCmykObjectCases } from './arrayToObject';
import { hsvArrayToCmykStringCases } from './arrayToString';
import { hsvObjectToCmykArrayCases } from './objectToArray';
import { hsvObjectToCmykObjectCases } from './objectToObject';
import { hsvObjectToCmykStringCases } from './objectToString';
import { hsvStringToCmykArrayCases } from './stringToArray';
import { hsvStringToCmykObjectCases } from './stringToObject';
import { hsvStringToCmykStringCases } from './stringToString';

export const fromHsvToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to CMYK object', cases: hsvArrayToCmykObjectCases.valid },
  { name: 'Invalid: HSV array to CMYK object', cases: hsvArrayToCmykObjectCases.invalid },

  { name: 'Valid: HSV array to CMYK array', cases: hsvArrayToCmykArrayCases.valid },
  { name: 'Invalid: HSV array to CMYK array', cases: hsvArrayToCmykArrayCases.invalid },

  { name: 'Valid: HSV array to CMYK string', cases: hsvArrayToCmykStringCases.valid },
  { name: 'Invalid: HSV array to CMYK string', cases: hsvArrayToCmykStringCases.invalid },

  // from object
  { name: 'Valid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.valid },
  { name: 'Invalid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.invalid },

  { name: 'Valid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.valid },
  { name: 'Invalid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.invalid },

  { name: 'Valid: HSV object to CMYK string', cases: hsvObjectToCmykStringCases.valid },
  { name: 'Invalid: HSV object to CMYK string', cases: hsvObjectToCmykStringCases.invalid },

  // from string
  { name: 'Valid: HSV string to CMYK object', cases: hsvStringToCmykObjectCases.valid },
  { name: 'Invalid: HSV string to CMYK object', cases: hsvStringToCmykObjectCases.invalid },

  { name: 'Valid: HSV string to CMYK array', cases: hsvStringToCmykArrayCases.valid },
  { name: 'Invalid: HSV string to CMYK array', cases: hsvStringToCmykArrayCases.invalid },

  { name: 'Valid: HSV string to CMYK string', cases: hsvStringToCmykStringCases.valid },
  { name: 'Invalid: HSV string to CMYK string', cases: hsvStringToCmykStringCases.invalid },
];
