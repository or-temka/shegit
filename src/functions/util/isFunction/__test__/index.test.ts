import { isFunction } from '../../../../../dist';
import { describeTestGroups } from '../../../../../utils';
import { TestGroups } from '../../../../../utils/test/describeTestGroups/types';
import { validCases } from './groups';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('isFunction', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid cases', cases: validCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => isFunction(input),
  });
});
