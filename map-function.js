// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
function mapFunction (fn, object) {
    let newObject = {};

    for (let property in object) {
        if (property !== 'length' && object.hasOwnProperty(property)) {
            newObject[property] = fn(object[property]);
        }
    }
    newObject.length = object.length;
    return newObject;
}

module.exports = mapFunction;