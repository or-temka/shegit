import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { HsvString } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = HsvString;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
