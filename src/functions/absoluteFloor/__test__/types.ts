import { CaseElement } from '../../../../utils/test/describeTestGroups/types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = number | undefined;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
