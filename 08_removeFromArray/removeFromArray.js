const removeFromArray = function(arr, ...toRemove) {
    let newArr;
    toRemove.forEach((numb) => {
        arr = arr.filter((itemArr) => itemArr !== numb)
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
