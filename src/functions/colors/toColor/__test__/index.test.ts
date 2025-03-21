import { describeTestGroups } from '../../../../../utils';
import { toColor } from '../../../../../dist';
import { TestGroups } from '../../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import {
  fromCmykToCmykGroups,
  fromCmykToHexGroups,
  fromCmykToHsvGroups,
  fromCmykToRgbGroups,
  fromColorTypeParameter,
  fromHexToCmykGroups,
  fromHexToHexGroups,
  fromHexToHsvGroups,
  fromHexToRgbGroups,
  fromHsvToCmykGroups,
  fromHsvToHexGroups,
  fromHsvToHsvGroups,
  fromHsvToRgbGroups,
  fromRgbToCmykGroups,
  fromRgbToHexGroups,
  fromRgbToHsvGroups,
  fromRgbToRgbGroups,
} from './groups';
import { To } from '../types';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected<To>> = [
    ...fromColorTypeParameter,

    ...fromRgbToRgbGroups,
    ...fromRgbToCmykGroups,
    ...fromRgbToHexGroups,
    ...fromRgbToHsvGroups,

    ...fromCmykToRgbGroups,
    ...fromCmykToCmykGroups,
    ...fromCmykToHexGroups,
    ...fromCmykToHsvGroups,

    ...fromHexToRgbGroups,
    ...fromHexToCmykGroups,
    ...fromHexToHexGroups,
    ...fromHexToHsvGroups,

    ...fromHsvToRgbGroups,
    ...fromHsvToCmykGroups,
    ...fromHsvToHexGroups,
    ...fromHsvToHsvGroups,
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to, input.fromColorType),
  });
});
