/* const foo = require('./moduleExport').foo;
const bar = require('./moduleExport').bar;
 */

//Yukarıdakinin kısa yolu var altda
const { foo, bar } = require('./moduleExport')

console.log(foo());
console.log(bar());