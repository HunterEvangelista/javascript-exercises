const removeFromArray = function(array, ...removeArgs) {
    
    if(Array.isArray(array)){
        // you can use includes inside the method argument
        // use ! to specify not
        const output = array.filter(array => !removeArgs.includes(array));
        return output;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
