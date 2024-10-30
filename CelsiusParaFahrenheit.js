const readline = require('readline-sync');

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let celsius = readline.question("Digite a temperatura em graus Celsius: ");
celsius = parseFloat(celsius);

if (celsius) { 
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C é igual a ${fahrenheit}°F Fahrenheit`);
}