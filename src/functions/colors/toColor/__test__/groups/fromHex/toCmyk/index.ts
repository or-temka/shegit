import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hexStringToCmykArrayCases } from './stringToArray';
import { hexStringToCmykObjectCases } from './stringToObject';
import { hexStringToCmykStringCases } from './stringToString';

export const fromHexToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object

  // from string
  { name: 'Valid: HEX string to CMYK object', cases: hexStringToCmykObjectCases.valid },
  { name: 'Invalid: HEX string to CMYK object', cases: hexStringToCmykObjectCases.invalid },

  { name: 'Valid: HEX string to CMYK array', cases: hexStringToCmykArrayCases.valid },
  { name: 'Invalid: HEX string to CMYK array', cases: hexStringToCmykArrayCases.invalid },

  { name: 'Valid: HEX string to CMYK string', cases: hexStringToCmykStringCases.valid },
  { name: 'Invalid: HEX string to CMYK string', cases: hexStringToCmykStringCases.invalid },
];
