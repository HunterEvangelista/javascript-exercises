const sumAll = function(x, y) {
    // (n/2)[2a + (n - 1)d]
    // n = number of terms
    // a = first term in the sequence
    // d = constant value between numbers
    if(x < 0 || y < 0) {
        return "ERROR"
    }
    else if(typeof x != "number" || typeof y != "number") {
        return "ERROR";
    }
    
    try {    
        let start = Math.min(x, y)
        let end = Math.max(x, y)
        let n = end - start + 1
        let a = start;
        return (
            (n/2) * (2 * a + (n - 1))
        );
    } catch(error) {
        return "ERROR";
    }
};

// console.log(sumAll())

// Do not edit below this line
module.exports = sumAll;
