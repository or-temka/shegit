import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hexStringToHsvArrayCases } from './stringToArray';
import { hexStringToHsvObjectCases } from './stringToObject';
import { hexStringToHsvStringCases } from './stringToString';

export const fromHexToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object

  // from string
  { name: 'Valid: HEX string to HSV object', cases: hexStringToHsvObjectCases.valid },
  { name: 'Invalid: HEX string to HSV object', cases: hexStringToHsvObjectCases.invalid },

  { name: 'Valid: HEX string to HSV array', cases: hexStringToHsvArrayCases.valid },
  { name: 'Invalid: HEX string to HSV array', cases: hexStringToHsvArrayCases.invalid },

  { name: 'Valid: HEX string to HSV string', cases: hexStringToHsvStringCases.valid },
  { name: 'Invalid: HEX string to HSV string', cases: hexStringToHsvStringCases.invalid },
];
