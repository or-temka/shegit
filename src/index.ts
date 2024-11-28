import { rgbArrayToObj, toColor } from 'shegit';
import exec from './utils/exec.js';

const input = [1, 2, 3];
exec(rgbArrayToObj, [input]);
exec(toColor, [input]);
