const convertToCelsius = function(faren) {
  let cel = (faren - 32) / 1.8;
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  let faren = cel * 1.8 + 32;
  faren = Math.round(faren * 10) /10;
  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
