import { describeTestGroups } from '../../../../utils';
import { toColor } from '../../../../dist/functions/toColor';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import { fromRgbToRgbGroups } from './groups';
import { To } from '../types';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected<To>> = [
    ...fromRgbToRgbGroups,
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to),
  });
});
