const { test, expect } = require('@jest/globals');
const { testArray, skylabArray } = require('./Array-methods');

describe('Array Methods', () => {

    describe('Push method', () => {
        
        test('Should add an element to the end of the array', () => {
            //arrange
            //act
            const response = skylabArray.push(testArray, 'newElement');
            //assert
            expect(response[3]).toBe('newElement');
        });

        test('The length of testArray should be 4 after adding one element', () => {
            //arrange
            //act
            const response = skylabArray.push(testArray, 'newElement');
            //assert
            expect(response.length).toBe(4);
        });
    })

    describe('Map method', () => {

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
            const response = skylabArray.map((x) => x * 2, testArray);
            //assert
            expect(response).toEqual({ '0': 2, '1': 4, '2': 6, length: 3});
        });

    })

});