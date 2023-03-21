const repeatString = function(string, num) {
    if(num === 0) {
        return "";
    } else if(num < 0) {
        return "ERROR";
    } else {
        let output = "";
        
        for(num; num > 0; num--) {
            output = output + string;
        }
        return output;
        
    }
};

// Do not edit below this line
module.exports = repeatString;
