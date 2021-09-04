const tail = require('../src/tail');

describe('Tail', () => {

    it('Return array[1,2,3,4] except first element', () => {
        expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });
    it('Return array[7,8,9] except first element', () => {
        expect(tail([7,8,9])).toEqual([8,9]);
    });

});