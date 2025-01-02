import { ColorType } from '../types';
import { getMostImportantColorType } from './getMostImportantColorType';
import { getPossibleComponentByValue } from './getPossibleComponentByValue';
import { parseComponent } from './parseComponent';

export const getPossibleArrayColor = (arr: any[]): ColorType => {
  switch (arr.length) {
    case 1:
      return getPossibleComponentByValue(arr[0]);

    case 2: {
      const possibleComponent1 = getPossibleComponentByValue(arr[0]);
      const possibleComponent2 = getPossibleComponentByValue(arr[1]);

      return getMostImportantColorType([possibleComponent1, possibleComponent2]);
    }

    case 3: {
      const possibleComponent1 = getPossibleComponentByValue(arr[0]);
      const possibleComponent2 = getPossibleComponentByValue(arr[1]);
      const possibleComponent3 = getPossibleComponentByValue(arr[2]);

      return getMostImportantColorType([
        possibleComponent1,
        possibleComponent2,
        possibleComponent3,
      ]);
    }

    case 4: {
      const possibleComponent1 = getPossibleComponentByValue(arr[0]);
      const possibleComponent2 = getPossibleComponentByValue(arr[1]);
      const possibleComponent3 = getPossibleComponentByValue(arr[2]);

      const component4 = parseComponent(arr[3]);
      let possibleComponent4: ColorType = 'rgb';
      if (component4 > 1) possibleComponent4 = 'cmyk';

      return getMostImportantColorType([
        possibleComponent1,
        possibleComponent2,
        possibleComponent3,
        possibleComponent4,
      ]);
    }

    default:
      return 'rgb';
  }
};
