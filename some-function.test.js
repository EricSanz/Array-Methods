const someFunction = require('./some-function');

describe('Some method', () => {

    beforeEach(() => {
        testArray = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        };
    })

    test('Should return true', () => {
        //arrange
        //act
        const response = someFunction((x) => x > 1, testArray);
        //assert
        expect(response).toBe(true);
    });

    test('Should return false', () => {
        //arrange
        //act
        const response = someFunction((x) => x < 1, testArray);
        //assert
        expect(response).toBe(false);
    })
});