import { rgbObjToArray } from '../../../../dist/functions/rgbObjToArray';
import { describeTestGroups } from '../../../../utils';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { extraElements, invalidTypes, mixedCases, partialArrays, validCases } from './groups';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('RGB object to array', () => {
  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid cases', cases: validCases },
    { name: 'Partial arrays', cases: partialArrays },
    { name: 'Extra elements', cases: extraElements },
    { name: 'Invalid types', cases: invalidTypes },
    { name: 'Mixed cases', cases: mixedCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => rgbObjToArray(input),
  });
});
