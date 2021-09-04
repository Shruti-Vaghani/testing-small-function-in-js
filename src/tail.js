const { array } = require("yargs");

const tail = (array) => {
    array.shift();
    return array;
}
module.exports = tail;