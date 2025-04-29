const sumAll = function(start, end) {
    let begin =0
    let sumOfAllValues = 0;
    for (let i = start; i <= end; i++){
        sumOfAllValues += i;
    }
   
    
    return sumOfAllValues;
    
};
sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
