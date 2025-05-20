const palindromes = function (str) {
    const charsToRemove = ['!',' ', ',', '.'];
    str = str.toLowerCase();
    str = [...str];

    let chars = str.filter(char => !charsToRemove.includes(char));

     let reverseChars = chars.slice().reverse();
     
     chars = chars.join('')
     reverseChars = reverseChars.join('')

     //console.log(chars);
     //console.log(reverseChars);

     if(chars === reverseChars) {
        return true;
     }else {
        return false;
     }
     
    
};
//palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
