import { CaseElement } from '../../../../../../utils/test/describeTestGroups/types';
import { RgbaObj } from '../../../../../types';

export type TestGroupCaseElementInput = any;

export type TestGroupCaseElementExpected = RgbaObj;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
