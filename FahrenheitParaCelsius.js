const readline = require('readline-sync');

function FahrenheitToCelsius(celsius) {
  return (celsius - 32) / 1.8;
}

let celsius = readline.question("Digite a temperatura em graus Fahrenheit: ");
celsius = parseFloat(celsius);

if (celsius) { 
  let fahrenheit = FahrenheitToCelsius(celsius);
  console.log(`${celsius}°C é igual a ${fahrenheit}°F Fahrenheit`);
}
