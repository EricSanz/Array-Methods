// The fill() method changes all elements in an array to a static value, from a start index(default 0) to an end index(default array.length). it returns the modified array.
function fillFunction (object, value, start = 0, end = object.length) {
    let newObject = {};
    newObject.length = object.length;

    for (let property in object) {
        if ((property < start || property >= end) && property !== 'length' && object.hasOwnProperty(property)) {
            newObject[property] = object[property];
        } else if (property >= start && property < end && property !== 'length' && object.hasOwnProperty(property)) {
            newObject[property] = value;
        }
    };
    return newObject;
}

module.exports = fillFunction;