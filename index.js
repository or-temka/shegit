import exec from './utils/exec.js';
import { rgbArrayToObj } from '@shegit/rgb-array-to-obj';
import { toColor } from '@shegit/to-color';

const input = [1, 2, 3];
exec(rgbArrayToObj, [input]);
exec(toColor, [input]);
