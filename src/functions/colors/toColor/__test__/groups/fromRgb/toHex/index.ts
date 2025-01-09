import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbArrayToHexStringCases } from './arrayToString';
import { rgbObjectToHexStringCases } from './objectToString';
import { rgbStringToHexStringCases } from './stringToString';

export const fromRgbToHexGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array
  { name: 'Valid: RGB array to HEX string', cases: rgbArrayToHexStringCases.valid },
  { name: 'Invalid: RGB array to HEX string', cases: rgbArrayToHexStringCases.invalid },

  // from object
  { name: 'Valid: RGB object to HEX string', cases: rgbObjectToHexStringCases.valid },
  { name: 'Invalid: RGB object to HEX string', cases: rgbObjectToHexStringCases.invalid },

  // from string
  { name: 'Valid: RGB string to HEX string', cases: rgbStringToHexStringCases.valid },
  { name: 'Invalid: RGB string to HEX string', cases: rgbStringToHexStringCases.invalid },
];
