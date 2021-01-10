// The value saved to kelvin will stay constant.
const kelvin = 300;
// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
celsius == Math.floor(celsius);
console.log(`The temperature is ${celsius} celsius`);
// Fahrenheit = Celsius * (9/5) + 32
const fahrenheit = celsius * (9/5) + 32;
fahrenheit == Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} fahrenheit`)
