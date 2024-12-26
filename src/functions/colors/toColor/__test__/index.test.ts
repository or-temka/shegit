import { describeTestGroups } from '../../../../../utils';
import { toColor } from '../../../../../dist';
import { TestGroups } from '../../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import { fromRgbToCmykGroups, fromRgbToRgbGroups } from './groups';
import { To } from '../types';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected<To>> = [
    ...fromRgbToRgbGroups,
    ...fromRgbToCmykGroups,
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to, input.fromColorType),
  });
});
