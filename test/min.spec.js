const min = require('../src/min');

describe('Min', () => {
    it('min([]) return null', () => {
        expect(min([])).toEqual(null);
    });
    it('min([7,8,9]) return 7', () => {
        expect(min([7,8,9])).toEqual(7);
    });
    it('min([5]) return 5', () => {
        expect(min([5])).toEqual(5);
    });
    it('min([-8,-9]) return -9', () => {
        expect(min([-8,-9])).toEqual(-9);
    });
});