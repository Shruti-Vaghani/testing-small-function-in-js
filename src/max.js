const max = (array) => {

    if (array.length == 0) return null;

    if (array.length == 1) return array[0];

    if (array[0] < array[1]) {
        array.splice(0,1);
    }
    else {
        array.splice(1,1);
    }

    return max(array);
};


module.exports = max;