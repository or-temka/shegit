import { TestGroups } from './types';

export interface DescribeTestGroupsProps<CaseElementInput, CaseElementExpected> {
  testGroups: TestGroups<CaseElementInput, CaseElementExpected>;
  callback: (input: CaseElementInput) => any;
}

export function describeTestGroups<CaseElementInput, CaseElementExpected>({
  testGroups,
  callback,
}: DescribeTestGroupsProps<CaseElementInput, CaseElementExpected>) {
  testGroups.forEach((group, index) => {
    describe(`(${index + 1}/${testGroups.length}) ${group.name}`, () => {
      const lastCaseId = group.cases[group.cases.length - 1]?.id;

      group.cases.forEach((test) => {
        it(`(${test.id}/${lastCaseId}) input: ${JSON.stringify(
          test.input,
        )}, expected: ${JSON.stringify(test.expected)}`, () => {
          const actual = callback(test.input);
          expect(actual).toStrictEqual(test.expected);
        });
      });
    });
  });
}
