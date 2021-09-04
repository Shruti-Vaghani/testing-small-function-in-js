
const map = require('../src/map');

const cube = (num) => {
    return num**3;
};
const identity = (array) => {
    return array;
};

describe('Map', () => {
    describe('cube', () => {
        it('Map return cube of array[1,2,3,4] ', () => {
            expect(map([1,2,3], cube)).toEqual([1,8,27]);
        });
        it('Map return cube of empty array as empty array ', () => {
            expect(map([], cube)).toEqual([]);
        });
        it('Map return cube of array[4] ', () => {
            expect(map([4], cube)).toEqual([64]);
        });
    });
   
    describe('identity', () =>{
        it('Map return identity of array[1,2,3,4]', () => {
            expect(map([1,2,3,4], identity)).toEqual([1,2,3,4]);
        });
    });
    
    // describe('someObject', () => {
    //     it('Map data using object', () => {
    //         expect(map(arrcom,someObject)).toEqual([11]);
    //     });
    // });
});