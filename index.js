require("dotenv").config(); //.config() - reads the environment variables from .env file and adds them to process.env

var names = "Jonathan";
var sentence1 = "Hello, My name is ".concat(names, ". I am a new TypeScript developer\n and here is my MetaMask key: ").concat(process.env.PUBLIC_KEY_METAMASK);
var sentence2 = "Hello, My name is J Breezey. This is the current weather\n in Baltimore, Maryland: ".concat(process.env.WEATHER_API_KEY);

console.log(sentence1, sentence2); // process.env - is an object that contains all the environment variables
