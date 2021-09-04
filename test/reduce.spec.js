const reduce = require('../src/reduce');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) return undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([],(x,y)=>x+y,10) return 10', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });
    
    it('reduce([a,b,c],(x,y)=>x+y) return abc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y),).toEqual('abc');
    });
    
    it('reduce([a,b,c],(x,y)=>x+y, z) return zabc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y, 'z'),).toEqual('zabc');
    });
       
    it('reduce([],v(x,y)=>x+y,10) return 10', () => {
        expect(reduce([],(x,y)=>x+y, 20)).toEqual(20);
    });
    
    
});