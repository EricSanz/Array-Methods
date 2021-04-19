//  The findIndex() method returns the index of the first element in teh array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.
function findIndexFunction (fn, object) {
    for (let property in object) {
        if (fn(object[property])) {
            return Number(property);
        }
    }
    return -1;
}

module.exports = findIndexFunction;