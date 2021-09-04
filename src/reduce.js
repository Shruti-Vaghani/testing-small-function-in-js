const head = require("./head")

const reduce = (array, condition, defaultValue = undefined) => {
    const headElement = head(array);

    if (defaultValue == undefined && typeof(headElement) == "string") {
        defaultValue = '';
    }
    
    if (defaultValue == undefined && typeof(headElement) == "number") {
        defaultValue = 0;
    }

    if (headElement == null) {
        return defaultValue;
    }

    const subArray = array.slice(1);

    return reduce(subArray, condition, condition(defaultValue, headElement));
}
module.exports = reduce;