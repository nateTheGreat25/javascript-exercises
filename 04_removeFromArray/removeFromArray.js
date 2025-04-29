const removeFromArray = function(numbers, ...valuesToRemove) {
    //let RemoveLength = valuesToRemove.length;
    let modArray = numbers;
    for (let i = 0; i <= valuesToRemove.length; i++ ){
        modArray = modArray.filter(number => number !== valuesToRemove[i]);
    }
    return modArray;
};

// Do not edit below this line
module.exports = removeFromArray;
