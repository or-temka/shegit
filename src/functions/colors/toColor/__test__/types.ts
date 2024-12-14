import { ReturnColorType, To } from '../types';
import { CaseElement } from '../../../../../utils/test/describeTestGroups/types';

export type TestGroupCaseElementInput = {
  color: any;
  to?: To;
};

export type TestGroupCaseElementExpected<T extends To> = ReturnColorType<T>;

export type CaseElements<T extends To> = CaseElement<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<T>
>[];

export type GroupCaseElements<T extends To> = {
  valid: CaseElements<T>;
  invalid: CaseElements<T>;
};
