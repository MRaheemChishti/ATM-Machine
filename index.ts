#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance: number = 20000; //Dollar
let myPin: number = 34423;

let pinAnswer = await inquirer.prompt(
    [
        {
           name: "Question1",
           message: "Enter your pin number: ",
           type: "number",
        }
    ]
)
if(pinAnswer.Question1 == myPin){
    console.log("correct pin code!!!");
    let OperationAns = await inquirer.prompt(
        [
            {
                name: "Operation",
                message: "Please select option",
                type: "list",
                choices: ["Withdraw", "Check Balance", "Fast Cash"]
            }
        ]
    )
    if (OperationAns.Operation === "Withdraw")
    {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]
        )

        myBalance -= amountAns.amount
        if (myBalance >= amountAns.amount) {
        console.log("your remaining balance is: " + myBalance)
    }   else if (myBalance < amountAns.amount) {
        console.log("you have insufficient amount");
    }

    }

    else if (OperationAns.Operation === "Check Balance") 
    {
        console.log("your current balance is: " + myBalance)}
   
        if (OperationAns.Operation === "Fast Cash")
    {
        let FastCashAns = await inquirer.prompt(
            [
                {
                    name: "FastCash",
                    message: "Select Amount For Withdraw",
                    type: "list",
                    choices: ["500", "1000", "5000", "10000", "50000", "100000"]
                }
            ]
        )
        myBalance -= FastCashAns.FastCash
         if (myBalance > FastCashAns.FastCash) {
        console.log("your remaining balance is: " + myBalance)
    }   else if (myBalance < FastCashAns.FastCash) {
        console.log("you have insufficient amount")
    }
}}
else {
    console.log("incorrect pin code")
    }