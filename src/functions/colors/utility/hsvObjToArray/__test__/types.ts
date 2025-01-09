import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { HsvArray } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = HsvArray;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
