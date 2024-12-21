import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { CmykObj } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = CmykObj;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
