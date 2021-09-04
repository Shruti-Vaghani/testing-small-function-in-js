const filter = require('../src/filter');

const upperCaselatter = (c) => {
    if (c == c.toUpperCase()) {
        return true;
    }

    return false;
};

describe('Filter', () => {

    it('Filter return empty array  if x is true and array is empty', () => {
        expect(filter([], x => true)).toEqual([]);
    });
    
    it('Filter return array[1,2,3] if x is true', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });
    
    it('Filter return empty array, array[4,5,6] and  x is false', () => {
        expect(filter([4,5,6], x => false)).toEqual([]);
    });
    
    it('Filter return [1,3,] if x is odd and array is [1,2,3]', () => {
        expect(filter([1,2,3], x => x % 2 != 0)).toEqual([1, 3]);
    });

    it('Filter return[B,D] if x is uppercase and array is [a, B, c, D]', () => {
        expect(filter(['a', 'B', 'c', 'D'], upperCaselatter)).toEqual(['B', 'D']);
    });

});