import { resolveValue } from '../../../../../dist';
import { describeTestGroups } from '../../../../../utils';
import { TestGroups } from '../../../../../utils/test/describeTestGroups/types';
import { invalidCases, validCases } from './groups';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('resolveValue', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid cases', cases: validCases },
    { name: 'Invalid cases', cases: invalidCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) =>
      input.useToString
        ? resolveValue(input.value, input.depth).toString()
        : resolveValue(input.value, input.depth),
  });
});
