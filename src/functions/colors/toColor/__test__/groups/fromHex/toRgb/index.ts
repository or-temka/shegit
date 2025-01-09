import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hexStringToRgbArrayCases } from './stringToArray';
import { hexStringToRgbObjectCases } from './stringToObject';
import { hexStringToRgbStringCases } from './stringToString';

export const fromHexToRgbGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object

  // from string
  { name: 'Valid: HEX string to RGB object', cases: hexStringToRgbObjectCases.valid },
  { name: 'Invalid: HEX string to RGB object', cases: hexStringToRgbObjectCases.invalid },

  { name: 'Valid: HEX string to RGB array', cases: hexStringToRgbArrayCases.valid },
  { name: 'Invalid: HEX string to RGB array', cases: hexStringToRgbArrayCases.invalid },

  { name: 'Valid: HEX string to RGB string', cases: hexStringToRgbStringCases.valid },
  { name: 'Invalid: HEX string to RGB string', cases: hexStringToRgbStringCases.invalid },
];
