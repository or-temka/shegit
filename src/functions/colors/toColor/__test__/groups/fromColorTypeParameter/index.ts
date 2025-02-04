import { TestGroups } from '../../../../../../../utils/test/describeTestGroups/types';
import { To } from '../../../types';
import { TestGroupCaseElementExpected, TestGroupCaseElementInput } from '../../types';
import { invalidFromColorTypeParameterCases } from './invalidParameter';

export const fromColorTypeParameter: TestGroups<
  TestGroupCaseElementInput,
  TestGroupCaseElementExpected<To>
> = [
  { name: 'Invalid "fromColorType" parameter', cases: invalidFromColorTypeParameterCases.invalid },
];
