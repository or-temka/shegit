import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hexStringToHexStringCases } from './stringToString';

export const fromHexToHexGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object

  // from string
  { name: 'Valid: HEX string to HEX string', cases: hexStringToHexStringCases.valid },
  { name: 'Invalid: HEX string to HEX string', cases: hexStringToHexStringCases.invalid },
];
