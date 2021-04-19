const findIndexFunction = require('./findIndex-function');

describe('FindIndex method', () => {
    
    beforeEach(() => {
        testArray = { '0': 1, '1': 45, '2': 20, '3': -1, '4': -20, length: 5};
    });

    test('Should return the index of the first number greater than 25, in this case, index 1', () => {
        //arrange
        //act
        const response = findIndexFunction((x) => x > 25, testArray);
        //assert
        expect(response).toBe(1);
    });

    test('Should return the index of the first number below -5, in this case, index 4', () => {
        //arrange
        //act
        const response = findIndexFunction((x) => x < -5, testArray);
        //assert
        expect(response).toBe(4);
    });

    test('Should return -1', () => {
        //arrange
        //act
        const response = findIndexFunction((x) => x === 0, testArray);
        //assert
        expect(response).toBe(-1);
    })
});