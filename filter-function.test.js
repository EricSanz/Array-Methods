const filterFuntion = require('./filter-function');

describe('Filter method', () => {

    test('Should return index 1 and 2', () => {
        //arrange
        const array = { '0': 1, '1': 45, '2': 20, '3': -1, '4': -20, length: 5};
        //act
        const response = filterFuntion((x) => x > 1, array);
        //assert
        expect(response).toEqual({ '1': 45, '2': 20, length: 2 });
    });

    test('Should return only numbers 4', () => {
        //arrange
        const array = { '0': 1, '1': 4, '2': 20, '3': -1, '4': 4, length: 5};
        //act
        const response = filterFuntion((x) => x === 4, array);
        //assert
        expect(response).toEqual({ '1': 4, '4': 4, length: 2 })
    });

    test('Should return only strings', () => {
        //arrange
        const array = { '0': '1', '1': 45, '2': 'twenty', '3': -1, '4': -20, length: 5};
        //act
        const response = filterFuntion((x) => typeof x === 'string', array);
        //assert
        expect(response).toEqual( {'0': '1', '2': 'twenty', length: 2});
    })
});