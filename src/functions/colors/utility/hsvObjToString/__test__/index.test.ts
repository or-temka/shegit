import { hsvObjToString } from '../../../../../../dist';
import { describeTestGroups } from '../../../../../../utils';
import { TestGroups } from '../../../../../../utils/test/describeTestGroups/types';
import { invalidCases, validCases } from './groups';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('HSV object to string', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid cases', cases: validCases },
    { name: 'Invalid cases', cases: invalidCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => hsvObjToString(input),
  });
});
