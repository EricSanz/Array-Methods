const { test, expect } = require('@jest/globals');
const { testArray } = require('./Array-methods');

describe('Array Methods', () => {

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
        const response = testArray.map((x) => x * 2, testArray);
        //assert
        expect(response).toEqual({ '0': 2, '1': 4, '2': 6, length: 3});
    });

});