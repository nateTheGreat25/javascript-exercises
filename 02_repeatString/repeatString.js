const repeatString = function(string, num) {
   if (num < 0) return "ERROR";
    let endString = '';
    let i = 0;
    while (i < num){
        endString += string;
        i++;
        
          
    }
    return endString;
};

// Do not edit below this line
module.exports = repeatString;
