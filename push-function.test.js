const pushFunction = require('./push-function');

describe('Push method', () => {

    beforeEach(() => {
        testArray = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        };
    })
        
    test('Should add an element to the end of the array', () => {
        //arrange
        //act
        const response = pushFunction(testArray, 'newElement');
        //assert
        expect(response[3]).toBe('newElement');
    });

    test('The length of testArray should be 4 after adding one element', () => {
        //arrange
        //act
        const response = pushFunction(testArray, 'newElement');
        //assert
        expect(response.length).toBe(4);
    });
})