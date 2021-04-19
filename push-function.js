// The push() method adds one or more elements to the end of an array and return the new length of the array.
function pushFunction(fn, object) {
    return {
        ...fn,
        [fn.length]: object,
        length: fn.length + 1
    };
}

module.exports = pushFunction;