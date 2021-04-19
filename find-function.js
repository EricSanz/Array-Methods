// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
function findFunction (fn, object) {
    for (let property in object) {
        if (fn(object[property]) && object.hasOwnProperty(property)) {
            return object[property];
        }
    }
}

module.exports = findFunction;