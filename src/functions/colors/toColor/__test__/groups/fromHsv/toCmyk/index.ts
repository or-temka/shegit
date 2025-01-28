import { TestGroups } from '../../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../../types';
import { hsvObjectToCmykArrayCases } from './objectToArray';
import { hsvObjectToCmykObjectCases } from './objectToObject';

export const fromHsvToCmykGroups: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  // from array

  // from object
  { name: 'Valid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.valid },
  { name: 'Invalid: HSV object to CMYK object', cases: hsvObjectToCmykObjectCases.invalid },

  { name: 'Valid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.valid },
  { name: 'Invalid: HSV object to CMYK array', cases: hsvObjectToCmykArrayCases.invalid },

  // from string
];
