const fillFunction = require('./fill-function');

describe('Fill method', () => {

    beforeEach(() => {
        testArray = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        };
    })

    test('Should change to 10 in every index', () => {
        //arrange
        //act
        const response = fillFunction(testArray, 10);
        //assert
        expect(response).toEqual({ '0': 10, '1': 10, '2': 10, length: 3});
    });

    test('Should change to 10 in index 1 and 2', () => {
        //arrange
        //act
        const response = fillFunction(testArray, 10,1);
        //assert
        expect(response).toEqual({ '0': 1, '1': 10, '2': 10, length: 3});
    });

    test('Should change to 10 in index 0', () => {
        //arrange
        //act
        const response = fillFunction(testArray, 10,0,1);
        //assert
        expect(response).toEqual({ '0': 10, '1': 2, '2': 3, length: 3});
    });

    test('Should change to 100 in last index', () => {
        //arrange
        //act
        const response = fillFunction(testArray, 100, testArray.length -1)
        //assert
        expect(response).toEqual({ '0': 1, '1': 2, '2': 100, length: 3});
    });
});