import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { HsvObj } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = HsvObj;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
