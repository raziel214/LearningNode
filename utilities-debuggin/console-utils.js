// %s - String
// %d - Number
// %i - parseInt(value, 10)
// %f - parseFloat(value)
// %j - JSON
// %o - Object
// %c - Css
// %% - signo de '%'
// console.log("Un %s y un %s", "perrito", "gatito");
// console.info("hello world");
// console.warn("hello error"); dice si hay un error
// console.assert(42 == "42"); devuelve si una comparacion es correcta 
// console.assert(42 === "42");devuelve si una comparacion es correcta 
// console.trace("hello");dice la linea del error

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");