// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true, otherwise it returns false.
// It doesn't modify the array.
function someFunction (fn, object) {
    for (let property in object) {
        if (fn(object[property]) && object.hasOwnProperty(property)) {
            return true;
        }
    }
    return false;
}

module.exports = someFunction;