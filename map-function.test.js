const mapFunction = require('./map-function');

describe('Map method', () => {

    describe('Map method with numbers', () => {

        beforeEach(() => {
            testArray = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
        })

        test('testArray length should return 3', () => {
            //arrange
            //act
            const response = testArray.length;
            //assert
            expect(response).toBe(3);
        });
    
        test('map on testArray should return double value on every index', () => {
            //arrange
            //act
            const response = mapFunction((x) => x * 2, testArray);
            //assert
            expect(response).toEqual({ '0': 2, '1': 4, '2': 6, length: 3});
        });
    });

    describe('Map method with letters', () => {
        test('Should add " position" in every element', () => {
            //arrange
            const array = { 0: 'first', 1: 'second', 2: 'third', length: 3 };
            //act
            const response = mapFunction((x) => x + ' position', array);
            //assert
            expect(response).toEqual({ '0': 'first position', '1': 'second position', '2': 'third position', length: 3});
        })
    })
});