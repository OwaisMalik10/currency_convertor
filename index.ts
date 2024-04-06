#!/usr/bin/env node

import inquirer from "inquirer";

const currency :any = {
    USD : 1,   // base currency
    EUR : 1.98,
    GBP : 1.26,
    JPY : 0.0066,
    INR : 74.57,
    PKR : 250,
    AED : 0.27,
    AUD : 0.66,
}

let user_answer= await inquirer.prompt ([
    {

        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "INR", "PKR", "AED", "AUD"],
    },

    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "INR", "PKR", "AED", "AUD"],
    },
    {
        name: "amount",
        message: "enter amount",
        type: "number",
    },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];  
let amount = user_answer.amount
let baseAamount = amount / fromAmount;
let convertedAmount = baseAamount * toAmount;

console.log(convertedAmount);


