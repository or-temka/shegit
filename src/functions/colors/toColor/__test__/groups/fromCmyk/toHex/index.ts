import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { cmykArrayToHexStringCases } from './arrayToString';
import { cmykObjectToHexStringCases } from './objectToString';
import { cmykStringToHexStringCases } from './stringToString';

export const fromCmykToHexGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: CMYK array to HEX string', cases: cmykArrayToHexStringCases.valid },
  { name: 'Invalid: CMYK array to HEX string', cases: cmykArrayToHexStringCases.invalid },

  // from object
  { name: 'Valid: CMYK object to HEX string', cases: cmykObjectToHexStringCases.valid },
  { name: 'Invalid: CMYK object to HEX string', cases: cmykObjectToHexStringCases.invalid },

  // from string
  { name: 'Valid: CMYK string to HEX string', cases: cmykStringToHexStringCases.valid },
  { name: 'Invalid: CMYK string to HEX string', cases: cmykStringToHexStringCases.invalid },
];
