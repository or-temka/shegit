export type CaseElement<CaseElementInput, CaseElementExpected> = {
  id: number;
  input: CaseElementInput;
  expected: CaseElementExpected;
};

export type GroupElement<CaseElementInput, CaseElementExpected> = {
  name: string;
  cases: CaseElement<CaseElementInput, CaseElementExpected>[];
};

export type TestGroups = GroupElement<unknown, unknown>[];
