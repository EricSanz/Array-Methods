// The copyWithin() method copies part of an array to another location in the same array and returns it without modifying its length.
function copyWithinFunction (object, target, start = 0, end = Object.entries(object).length) {
    if (target >= Object.entries(object).length) {
        return;
    }
    let values = {};

    for (let i = start; i < end; i++) {
            values[i] = Object.entries(object)[i][1];
    };

    for (let i = 0; i < Object.entries(values).length; i++) {
        if (!object[target + i]) {
            return object;
        }
        object[target + i] = Object.entries(values)[i][1];
    };

    return object;
}

module.exports = copyWithinFunction;