import inquirer from "inquirer";
 async function transfer(balance:number) {
    const answer = await inquirer.prompt([{
           name:"accountNumber",
           type: "number",
           message:"enter you account number",

    },{
        name:"amount",
        type:"number",
        message:"enter your amount"
    }])   
    balance -= answer.amount
    return balance
 }

 export default transfer