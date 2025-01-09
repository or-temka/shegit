import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { RgbObj } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = RgbObj;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
