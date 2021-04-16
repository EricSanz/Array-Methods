const { test, expect, describe } = require('@jest/globals');
const { testArray, skylabArray } = require('./Array-methods');

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

        test('Should add " position" in every element', () => {
            //arrange
            const array = { 0: 'first', 1: 'second', 2: 'third', length: 3 };
            //act
            const response = skylabArray.map((x) => x + ' position', array);
            //assert
            expect(response).toEqual({ '0': 'first position', '1': 'second position', '2': 'third position', length: 3});
        })

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
    });

    describe('copyWithin method', () => {
        test('Should take the element in index 1 and put it in the first index', () => {
            //arrange
            //act
            const response = testArray.copyWithin(testArray, 0, 1, 2);
            //assert
            expect(response).toEqual({ '0': 2, '1': 2, '2': 3, length: 3});
        });

        test('Should take the last 2 elements and put it in the beginning of the array', () => {
            //arrange
            //act
            const response = testArray.copyWithin(testArray, 0, 1);
            //assert
            expect(response).toEqual({ '0': 2, '1': 3, '2': 3, length: 3});
        })
    });

    describe('find method', () => {
        test('Should return the first number greater than 2', () => {
            //arrange
            //act
            const response = testArray.find((x) => x > 2, testArray);
            //assert
            expect(response).toBe(3);
        });

        test('Should return the fisrt number below -5, in this case, -20', () => {
            //arrange
            const array = { '0': 1, '1': 45, '2': 20, '3': -1, '4': -20, length: 5};
            //act
            const response = skylabArray.find((x) => x < -5, array);
            //assert
            expect(response).toBe(-20);
        });

        test('Should return undefined', () => {
            //arrange
            //act
            const response = testArray.find((x) => x > 5, testArray);
            //assert
            expect(response).toBe(undefined);
        })
    })

});