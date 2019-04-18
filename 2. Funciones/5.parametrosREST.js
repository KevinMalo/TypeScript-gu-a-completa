"use strict";
function rest(name) {
    var othersParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        othersParams[_i - 1] = arguments[_i];
    }
    return name + " " + othersParams.join(' ');
}
var fullNames = rest('Anthony', 'Edward', 'Tony', 'Stark');
console.log(fullNames);
