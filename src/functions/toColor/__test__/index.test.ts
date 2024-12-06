import { describeTestGroups } from '../../../../utils';
import { toColor } from '../../../../dist/functions/toColor';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import { rgbArrayToObjectCases, rgbObjectToArrayCases } from './groups';
import { To } from '../types';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected<To>> = [
    { name: 'Valid: RGB array to RGB object', cases: rgbArrayToObjectCases.valid },
    { name: 'Invalid: RGB array to RGB object', cases: rgbArrayToObjectCases.invalid },

    { name: 'Valid: RGB object to RGB array', cases: rgbObjectToArrayCases.valid },
    { name: 'Invalid: RGB object to RGB array', cases: rgbObjectToArrayCases.invalid },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to),
  });
});
