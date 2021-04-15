let skylabArray = {

    push: (fn, object) => {
        return {
            ...fn,
            [fn.length]: object,
            length: fn.length + 1,
            __proto__: skylabArray
        };
    },

    map: (fn, object) => {
        let newObject = {};
        for (let property in object) {
            if (property !== 'length' && object.hasOwnProperty(property)) {
                newObject[property] = fn(object[property]);
            }
        }
        newObject.length = object.length;
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