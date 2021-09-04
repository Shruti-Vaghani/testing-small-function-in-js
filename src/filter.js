const head = require('./head');

const filter = (array,x) => {
    const headElement = head(array);

    if(headElement == null)
        return [];
    
    const subArray = array.slice(1);

    if(x(headElement)){
        return [headElement].concat(filter(subArray,x));
    }
    else
        return filter(subArray,x);
}

module.exports = filter;