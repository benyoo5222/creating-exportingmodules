var sortnumbers= require('./sortingfunctions.js');


var sortednumbers=sortnumbers.sort;
var savednumbers=sortnumbers.list;

savednumbers(12);
savednumbers(4);
savednumbers(-2);
savednumbers(10);
savednumbers(-100);

console.log(sortednumbers());