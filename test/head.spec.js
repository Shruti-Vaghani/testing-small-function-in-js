const head = require('../src/head');
//var array = [1,2,3,4];
describe('Head', () => {

    it('First element of array[1,2,3,4]', () => {
        expect(head([1,2,3,4])).toEqual(1);
    });
    it('First element of array[7,8,9]', () => {
        expect(head([7,8,9])).toEqual(7);
    });

});