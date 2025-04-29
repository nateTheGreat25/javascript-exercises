const leapYears = function(year) {
    const isYearDivByFour = year % 4 === 0;
    const isYearDivByHundred = year % 100 !== 0;
    const isYearDivByFourHundred = year % 400 === 0;

    if (isYearDivByFour && (isYearDivByHundred || isYearDivByFourHundred)){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
