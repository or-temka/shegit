import { describeTestGroups } from '../../../../utils';
import { toColor } from '../../../../dist/functions/toColor';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';
import {
  incompleteArrayCases,
  invalidInputCases,
  nonStandartArrayCases,
  validArrayCases,
  withAlphaArrayCases,
} from './groups';

describe('To color - convert a color of one type to another', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid RGB arrays', cases: validArrayCases },
    { name: 'Incomplete arrays', cases: incompleteArrayCases },
    { name: 'With alpha arrays', cases: withAlphaArrayCases },
    { name: 'Non-standart arrays', cases: nonStandartArrayCases },
    { name: 'Invalid inputs', cases: invalidInputCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to),
  });
});
