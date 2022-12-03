require("dotenv").config(); //.config() - reads the environment variables from .env file and adds them to process.env

//// process.env - is an object that contains all the environment variables

var heading = "Jonathan's Wallet";
var balance1 = "Your current wallet balance is: ".concat(process.env.WALLET_BALANCE);
var privKey2 = "Your private key is:: ".concat(process.env.PRIVATE_KEY);

console.log(heading, balance1, privKey2); 
