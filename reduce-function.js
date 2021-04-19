// The reduce() methodexecutes a reducer function (that you provide) on each element of the array, resulting in single output value.
function reduceFunction (fn, object, initialValue) {

    let iterator = 0;
    let accumulator = initialValue;

    if (initialValue === undefined) {
        accumulator = object[0];
        iterator++;
    }

    for (iterator; iterator < object.length; iterator++) {
        accumulator = fn(accumulator, object[iterator]);
    }

    return accumulator;
}

module.exports = reduceFunction;