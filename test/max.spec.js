const max = require('../src/max');

describe('Max', () => {
    it('max([]) return null', () => {
        expect(max([])).toEqual(null);
    });
    it('max([7,8,9]) return 9', () => {
        expect(max([7,8,9])).toEqual(9);
    });
    it('max([5]) return 5', () => {
        expect(max([5])).toEqual(5);
    });
    it('max([-8,-9]) return -8', () => {
        expect(max([-8,-9])).toEqual(-8);
    });
});