let skylabArray = {

    // The push() method adds one or more elements to the end of an array and return the new length of the array.
    push: (fn, object) => {
        return {
            ...fn,
            [fn.length]: object,
            length: fn.length + 1,
            __proto__: skylabArray
        };
    },

    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    map: (fn, object) => {
        let newObject = {};
        for (let property in object) {
            if (property !== 'length' && object.hasOwnProperty(property)) {
                newObject[property] = fn(object[property]);
            }
        }
        newObject.length = object.length;
        return newObject;
    },

    // The fill() method changes all elements in an array to a static value, from a start index(default 0) to an end index(default array.length). it returns the modified array.
    fill: (object, value, start = 0, end = object.length) => {
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
}

let testArray = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    __proto__: skylabArray
};

module.exports = { testArray, skylabArray };