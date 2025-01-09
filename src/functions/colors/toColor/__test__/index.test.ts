import { describeTestGroups } from '../../../../../utils';
import { toColor } from '../../../../../dist';
import { TestGroups } from '../../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import {
  fromCmykToCmykGroups,
  fromCmykToHexGroups,
  fromCmykToRgbGroups,
  fromHexToCmykGroups,
  fromHexToHexGroups,
  fromHexToRgbGroups,
  fromRgbToCmykGroups,
  fromRgbToHexGroups,
  fromRgbToRgbGroups,
} from './groups';
import { To } from '../types';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected<To>> = [
    ...fromRgbToRgbGroups,
    ...fromRgbToCmykGroups,
    ...fromRgbToHexGroups,

    ...fromCmykToRgbGroups,
    ...fromCmykToCmykGroups,
    ...fromCmykToHexGroups,

    ...fromHexToRgbGroups,
    ...fromHexToCmykGroups,
    ...fromHexToHexGroups,
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to, input.fromColorType),
  });
});
