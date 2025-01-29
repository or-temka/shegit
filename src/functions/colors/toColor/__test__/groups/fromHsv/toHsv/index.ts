import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvArrayToHsvArrayCases } from './arrayToArray';
import { hsvArrayToHsvObjectCases } from './arrayToObject';
import { hsvArrayToHsvStringCases } from './arrayToString';
import { hsvObjectToHsvArrayCases } from './objectToArray';
import { hsvObjectToHsvObjectCases } from './objectToObject';
import { hsvObjectToHsvStringCases } from './objectToString';
import { hsvStringToHsvArrayCases } from './stringToArray';
import { hsvStringToHsvObjectCases } from './stringToObject';
import { hsvStringToHsvStringCases } from './stringToString';

export const fromHsvToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.valid },
  { name: 'Invalid: HSV array to HSV object', cases: hsvArrayToHsvObjectCases.invalid },

  { name: 'Valid: HSV array to HSV array', cases: hsvArrayToHsvArrayCases.valid },
  { name: 'Invalid: HSV array to HSV array', cases: hsvArrayToHsvArrayCases.invalid },

  { name: 'Valid: HSV array to HSV string', cases: hsvArrayToHsvStringCases.valid },
  { name: 'Invalid: HSV array to HSV string', cases: hsvArrayToHsvStringCases.invalid },

  // from object
  { name: 'Valid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.valid },
  { name: 'Invalid: HSV object to HSV object', cases: hsvObjectToHsvObjectCases.invalid },

  { name: 'Valid: HSV object to HSV array', cases: hsvObjectToHsvArrayCases.valid },
  { name: 'Invalid: HSV object to HSV array', cases: hsvObjectToHsvArrayCases.invalid },

  { name: 'Valid: HSV object to HSV string', cases: hsvObjectToHsvStringCases.valid },
  { name: 'Invalid: HSV object to HSV string', cases: hsvObjectToHsvStringCases.invalid },

  // from string
  { name: 'Valid: HSV string to HSV object', cases: hsvStringToHsvObjectCases.valid },
  { name: 'Invalid: HSV string to HSV object', cases: hsvStringToHsvObjectCases.invalid },

  { name: 'Valid: HSV string to HSV array', cases: hsvStringToHsvArrayCases.valid },
  { name: 'Invalid: HSV string to HSV array', cases: hsvStringToHsvArrayCases.invalid },

  { name: 'Valid: HSV string to HSV string', cases: hsvStringToHsvStringCases.valid },
  { name: 'Invalid: HSV string to HSV string', cases: hsvStringToHsvStringCases.invalid },
];
