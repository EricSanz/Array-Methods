const reduceFunction = require('./reduce-function');

describe('Reduce method', () => {
    test('Should return 30', () => {
        //arrange
        const array = { '0': 1, '1': 4, '2': 20, '3': 1, '4': 4, length: 5};
        //act
        const response = reduceFunction((a,b) => a + b, array);
        //assert
        expect(response).toBe(30);
    });

    test('Should return -20', () => {
        //arrange
        const array = { '0': 1, '1': 4, '2': -30, '3': 1, '4': 4, length: 5};
        //act
        const response = reduceFunction((a,b) => a + b, array);
        //assert
        expect(response).toBe(-20);
    });

    test('Should return "Hello, my name is Eric."', () => {
        //arrange
        const array = { '0': 'Hello, ', '1': 'my ', '2': 'name ', '3': 'is ', '4': 'Eric.', length: 5};
        //act
        const response = reduceFunction((a,b) => a + b, array);
        //assert
        expect(response).toBe('Hello, my name is Eric.');
    })
})