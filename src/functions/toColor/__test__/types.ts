import { To } from '../../../../types/functions/toColor/types';
import { CaseElement } from '../../../../utils/test/describeTestGroups/types';
import { RgbaObj } from '../../../types';

export type TestGroupCaseElementInput = {
  color: any;
  to?: To;
};

export type TestGroupCaseElementExpected = RgbaObj;

export type CaseElements = CaseElement<TestGroupCaseElementInput, TestGroupCaseElementExpected>[];
