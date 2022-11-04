require ("dotenv").config(); //.config() - reads the environment variables from .env file and adds them to process.env


let names: string = "Jonathan";
let sentence1: any = `Hello, My name is ${names}. I am a new TypeScript developer
 and here is my MetaMask key: ${process.env.PUBLIC_KEY_METAMASK}`;

let sentence2: string = `Hello, My name is J Breezey. This is the current weather
 in Baltimore, Maryland: ${process.env.WEATHER_API_KEY}`;
console.log(sentence1, sentence2); // process.env - is an object that contains all the environment variables

