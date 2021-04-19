const findFunction = require('./find-function');

describe('Find method', () => {
    test('Should return the first number greater than 2', () => {
        //arrange
        const testArray = { '0': 1, '1': 2, '2': 3, length: 3 };
        //act
        const response = findFunction((x) => x > 2, testArray);
        //assert
        expect(response).toBe(3);
    });

    test('Should return the fisrt number that is below -5, in this case, -20', () => {
        //arrange
        const array = { '0': 1, '1': 45, '2': 20, '3': -1, '4': -20, length: 5};
        //act
        const response = findFunction((x) => x < -5, array);
        //assert
        expect(response).toBe(-20);
    });

    test('Should return undefined', () => {
        //arrange
        const testArray = { '0': 1, '1': 2, '2': 3, length: 3 };
        //act
        const response = findFunction((x) => x > 5, testArray);
        //assert
        expect(response).toBe(undefined);
    })
});