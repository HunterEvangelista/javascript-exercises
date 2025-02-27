const convertToCelsius = function(fahrenheit) {
// (x - 32) * 5/9
  const celsius = ((fahrenheit - 32) * (5/9));
  return Math.round(celsius * 10)/10;

};

const convertToFahrenheit = function(celsius) {
  // x * (9/5) + 32
  const fahrenheit = (celsius * (9/5) + 32);
  return Math.round(fahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
