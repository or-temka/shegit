import { TestGroups } from './types';

export interface DescribeTestGroupsProps {
  testGroups: TestGroups;
}

export function describeTestGroups({ testGroups }: DescribeTestGroupsProps) {
  testGroups.forEach((group, index) => {
    describe(`(${index}/${testGroups.length}) ${group.name}`, () => {
      const lastCaseId = group.cases[group.cases.length - 1]?.id;

      group.cases.forEach((test) => {
        it(`(${test.id}/${lastCaseId}) input: ${JSON.stringify(test.input.color)}, to: ${
          test.input.to
        }, expected: ${JSON.stringify(test.expected)}`, () => {
          const actual = _.toColor(test.input.color, test.input.to);
          expect(actual).toStrictEqual(test.expected);
        });
      });
    });
  });
}
