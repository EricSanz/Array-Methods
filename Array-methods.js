let skylabArray = {

    // The push() method adds one or more elements to the end of an array and return the new length of the array.
    push: (fn, object) => {
        return {
            ...fn,
            [fn.length]: object,
            length: fn.length + 1
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
    },

    // The copyWithin() method copies part of an array to another location in the same array and returns it without modifying its length.
    copyWithin: (object, target, start = 0, end = Object.entries(object).length) => {
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
    },

    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.
    find: (fn, object) => {
        for (let property in object) {
            if (fn(object[property]) && object.hasOwnProperty(property)) {
                return object[property];
            }
        }
    },

    //  The findIndex() method returns the index of the first element in teh array that satisfies the provided testing function.
    // Otherwise, it returns -1, indicating that no element passed the test.
    findIndex: (fn, object) => {
        for (let property in object) {
            if (fn(object[property])) {
                return Number(property);
            }
        }
        return -1;
    },

    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    filter: (fn, object) => {
        let newObject = {};
        newObject.length = 0;
        for (let property in object) {
            if (fn(object[property]) && property !== 'length' && object.hasOwnProperty(property)) {
                newObject[property] = object[property];
                newObject.length++;
            }
        }
        return newObject;
    },

    // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    // It returns true if, in the array, it finds an element for which the provided function returns true, otherwise it returns false.
    // It doesn't modify the array.
    some: (fn, object) => {
        for (let property in object) {
            if (fn(object[property]) && object.hasOwnProperty(property)) {
                return true;
            }
        }
        return false;
    },

    // The every() method tests wether all elements in the array pass the test implemented by the provided function.
    // It returns a boolean value.

    every: (fn, object) => {
        for (let property in object) {
            if (!fn(object[property]) && property !== 'length' && object.hasOwnProperty(property)) {
                return false;
            }
        }
        return true;
    },

    // The reduce() methodexecutes a reducer function (that you provide) on each element of the array, resulting in single output value.

    reduce: (fn, object, initialValue) => {

        let iterator = 0;
        let accumulator = initialValue;

        if (initialValue === undefined) {
            accumulator = object[0];
            iterator++;
        }

        for (iterator; iterator < object.length; iterator++) {
            accumulator = fn(accumulator, object[iterator]);
        }

        return accumulator;
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