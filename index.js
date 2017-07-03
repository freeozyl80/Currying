function currying(fn) {
    var slice = Array.prototype.slice,
    __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __args.concat(__inargs));
    };
}
function square(i) {
    return i * i;
}

function dubble(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

var mapSQ = currying(map, square);
console.log(mapSQ([1, 2, 3, 4, 5]));
console.log(mapSQ([6, 7, 8, 9, 10]));
console.log(mapSQ([10, 20, 30, 40, 50]));
// ......

var mapDB = currying(map, dubble);
console.log(mapDB([1, 2, 3, 4, 5]);
console.log(mapDB([6, 7, 8, 9, 10]);
console.log(mapDB([10, 20, 30, 40, 50]);
// ......

// curry就是把接受端个函数的参数变换成一个单一参数，并且返回剩余的到新函数