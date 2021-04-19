const copyWithinFunction = require('./copywithin-function');

describe('CopyWithin method', () => {

    beforeEach(() => {
        testArray = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        };
    })

    test('Should take the element in index 1 and put it in the first index', () => {
        //arrange
        //act
        const response = copyWithinFunction(testArray, 0, 1, 2);
        //assert
        expect(response).toEqual({ '0': 2, '1': 2, '2': 3, length: 3});
    });

    test('Should take the last 2 elements and put it in the beginning of the array', () => {
        //arrange
        //act
        const response = copyWithinFunction(testArray, 0, 1);
        //assert
        expect(response).toEqual({ '0': 2, '1': 3, '2': 3, length: 3});
    })
});