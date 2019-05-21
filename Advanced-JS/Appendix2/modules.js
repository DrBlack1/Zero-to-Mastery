// -----------IIFE------------------
//js1 first file loaded.
var myApp = {}

//j2
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

//jQuery uses this: allows us to use $


// ---------CommonJS + Browserify---------
// js1
module.export = function add(a, b) {
    return a+ b
}

// js2
var add = require('./add');


// -----------ES6+Webpack2------------
//js1
export const add = (a, b) => a + b;
//or
export default function add() {
    return a + b;
}

//js2
import { add } from './add';
// or
import add from './add';