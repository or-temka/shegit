import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { CmykArray } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = CmykArray;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
