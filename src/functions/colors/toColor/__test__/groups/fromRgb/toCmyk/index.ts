import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';

import { rgbObjectToCmykObjectCases } from './ObjectToObject';

export const fromRgbToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from object
  { name: 'Valid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.valid },
  { name: 'Invalid: RGB object to CMYK object', cases: rgbObjectToCmykObjectCases.invalid },
];
