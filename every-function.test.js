const everyFunction = require('./every-function');

describe('Every method', () => {

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
        const response = everyFunction((x) => x > 0, testArray);
        //assert
        expect(response).toBe(true);
    });

    test('Should return false', () => {
        //arrange
        //act
        const response = everyFunction((x) => x === 10, testArray);
        //assert
        expect(response).toBe(false);
    })
});