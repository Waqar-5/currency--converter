#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const curency = {
    USD: 1, // Base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.26,
    PKR: 278
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.yellow("Enter From Currency"),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: chalk.yellow("Enter to Currency"),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: chalk.red("Enter Your Amount"),
        type: 'number'
    }
]);
let fromAmount = curency[user_answer.from];
let toAmount = curency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency 4
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow(convertedAmount));
