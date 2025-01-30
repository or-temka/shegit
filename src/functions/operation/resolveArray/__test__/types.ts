import { CaseElement } from '../../../../../utils/test/describeTestGroups/types';

export type TestGroupCaseElementInput = {
  value: any;
  depth?: any;
};

export type TestGroupCaseElementExpected = any[] | undefined;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
