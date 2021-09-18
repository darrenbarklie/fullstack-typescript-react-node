var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SpreadArray;
(function (SpreadArray) {
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    var c = __spreadArray(__spreadArray([], a, true), b, true);
    var d = a.concat(b);
    console.log("c before", c);
    console.log("d before", d);
    // => c before [ 1, 2, 3, 4, 5, 6 ]
    // => d before [ 1, 2, 3, 4, 5, 6 ]
    a.push(10);
    console.log("a pushed", a);
    // => a pushed [ 1, 2, 3, 10 ]
    console.log("c after", c);
    console.log("d after", d);
    // => c after [ 1, 2, 3, 4, 5, 6 ]
    // => d after [ 1, 2, 3, 4, 5, 6 ]
    // The later after console logs prove a new object is
    // created every time, as the modifed `a` with `10`
    // pushed, doesn't modify the result
})(SpreadArray || (SpreadArray = {}));
