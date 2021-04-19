// The every() method tests wether all elements in the array pass the test implemented by the provided function.
// It returns a boolean value.
function everyFunction (fn, object) {
    for (let property in object) {
        if (!fn(object[property]) && property !== 'length' && object.hasOwnProperty(property)) {
            return false;
        }
    }
    return true;
}

module.exports = everyFunction;