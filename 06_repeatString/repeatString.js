const repeatString = function(string, numRepeat) {
    let stringRep = "";
    for(let i = 0; i < numRepeat; i++){
        stringRep += string;
    }
    if(numRepeat < 0){
        return 'ERROR';
    }else {
    return stringRep;
    }
};

// Do not edit below this line
module.exports = repeatString;
