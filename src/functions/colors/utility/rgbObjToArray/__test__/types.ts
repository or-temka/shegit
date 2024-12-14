import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { RgbArray } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = RgbArray;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
