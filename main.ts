#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await  inquirer.prompt
(
    {
        name: "pin",
        message: "enter your pin",
        type:"number"
    }
);

if (pinAnswer.pin === myPin)
    {
        console.log("correct pin code");  
    }
    else
     {
    console.log("Incoorect Password");
     }
        let operationAns = await inquirer.prompt(
            [
                {
                    name : "operation",
                    message : "please select option",
                    type : "list",
                    choices:["withdraw","check balance","fast cash"]
                 }
            ]
         ); 
         console.log(operationAns.operation);

         if (operationAns.operation === "withdraw")
            {
              let amountAns = await inquirer.prompt
                (
                    [
                        {
                            name: "amount",
                            message: "Enter your amount",
                            type: "number",
                         }
                    ]  
                );
            
                if(myBalance>=amountAns.amount)
                    {
                myBalance -= amountAns.amount;
                console.log("your remaining balance is : " + myBalance);
                    }
            
             else{
                console.log("Insufficent Balance");
                } 
                
            } else if (operationAns.operation === "check balance"){
                console.log("your balance is :" + myBalance)
            }
        
    
        else if (operationAns.operation ==="fast cash")
            {
            let fastCashAmount = await inquirer.prompt
            (
                [          
                    {
                    name:"fast",
                    message: "please select you payment",
                    type: "list",
                    choices:["1000","3000","5000","15000","25000","5000"]
                    }

                ]
             );
             if(myBalance>=fastCashAmount.fast){
                myBalance -= fastCashAmount.fast;
                console.log("your remaining balance is : " +myBalance);
            }
            else{
            console.log("Insufficent Balance");
            } 
             
            }
        
            
            