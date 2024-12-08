import { rgbArrayToObj } from '../../../../dist/functions/rgbArrayToObj';
import { describeTestGroups } from '../../../../utils';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { invalidCases, validCases } from './groups';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('RGB array to object', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid cases', cases: validCases },
    { name: 'Invalid cases', cases: invalidCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => rgbArrayToObj(input),
  });
});
