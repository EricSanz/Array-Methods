// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
function filterFuntion (fn, object) {
    let newObject = {};
    newObject.length = 0;
    for (let property in object) {
        if (fn(object[property]) && property !== 'length' && object.hasOwnProperty(property)) {
            newObject[property] = object[property];
            newObject.length++;
        }
    }
    return newObject;
}

module.exports = filterFuntion;