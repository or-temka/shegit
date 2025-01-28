import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvArrayToHexStringCases } from './arrayToString';

import { hsvObjectToHexStringCases } from './objectToString';

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
];
