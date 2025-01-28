import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hsvArrayToHexStringCases } from './arrayToString';
import { hsvObjectToHexStringCases } from './objectToString';
import { hsvStringToHexStringCases } from './stringToString';

export const fromHsvToHexGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: HSV array to HEX string', cases: hsvArrayToHexStringCases.valid },
  { name: 'Invalid: HSV array to HEX string', cases: hsvArrayToHexStringCases.invalid },

  // from object
  { name: 'Valid: HSV object to HEX string', cases: hsvObjectToHexStringCases.valid },
  { name: 'Invalid: HSV object to HEX string', cases: hsvObjectToHexStringCases.invalid },

  // from string
  { name: 'Valid: HSV string to HEX string', cases: hsvStringToHexStringCases.valid },
  { name: 'Invalid: HSV string to HEX string', cases: hsvStringToHexStringCases.invalid },
];
