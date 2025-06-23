import _ from 'shegit';
import exec from './utils/exec.js';

console.log(`VERSION: ${_.VERSION}`);

const input = [1, 2, 3];
exec(_.rgbArrayToObj, [input]);
exec(_.toColor, [input]);

exec(_.mergeObjects, [
  { a: 3, b: 4 },
  { a: 2, c: 5 },
]);
