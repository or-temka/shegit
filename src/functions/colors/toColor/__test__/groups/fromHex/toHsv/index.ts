import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { hexStringToHsvObjectCases } from './stringToObject';

export const fromHexToHsvGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object

  // from string
  { name: 'Valid: HEX string to HSV object', cases: hexStringToHsvObjectCases.valid },
  { name: 'Invalid: HEX string to HSV object', cases: hexStringToHsvObjectCases.invalid },
];
