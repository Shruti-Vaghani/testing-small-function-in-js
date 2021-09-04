
const head = require("./head");
const { array } = require("yargs");

const map = (array, cube) => {
    const headElement = head(array);
    
    if(headElement == null){
        return[];
    }
    const mapElement = cube(headElement);
    const subArray = array.slice(1);    

    return [mapElement].concat(map(subArray,cube));
}

module.exports = map;