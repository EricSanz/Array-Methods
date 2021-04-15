const { test, expect, describe } = require('@jest/globals');
const { testArray } = require('./Array-methods');

describe('Array Methods', () => {

    describe('Push method', () => {
        
        test('Should add an element to the end of the array', () => {
            //arrange
            //act
            const response = testArray.push(testArray, 'newElement');
            //assert
            expect(response[3]).toBe('newElement');
        });

        test('The length of testArray should be 4 after adding one element', () => {
            //arrange
            //act
            const response = testArray.push(testArray, 'newElement');
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
            const response = testArray.map((x) => x * 2, testArray);
            //assert
            expect(response).toEqual({ '0': 2, '1': 4, '2': 6, length: 3});
        });

    });

    describe('Fill method', () => {

        test('Should change to 10 in every index', () => {
            //arrange
            //act
            const response = testArray.fill(testArray, 10);
            //assert
            expect(response).toEqual({ '0': 10, '1': 10, '2': 10, length: 3});
        });

        test('Should change to 10 in index 1 and 2', () => {
            //arrange
            //act
            const response = testArray.fill(testArray, 10,1);
            //assert
            expect(response).toEqual({ '0': 1, '1': 10, '2': 10, length: 3});
        });

        test('Should change to 10 in index 0', () => {
            //arrange
            //act
            const response = testArray.fill(testArray, 10,0,1);
            //assert
            expect(response).toEqual({ '0': 10, '1': 2, '2': 3, length: 3});
        });

        test('Should change to 100 in last index', () => {
            //arrange
            //act
            const response = testArray.fill(testArray, 100, testArray.length -1)
            //assert
            expect(response).toEqual({ '0': 1, '1': 2, '2': 100, length: 3});
        });
    })

});