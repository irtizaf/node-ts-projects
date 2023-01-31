import inquirer from "inquirer";

async function otherAmount(balance:number){
    const otherAmount = await inquirer.prompt([{
        name:"otherAmount",
        type:"number",
        message:"enter your amount"

    }])
    if (balance>otherAmount.otherAmount){
        balance -= otherAmount.otherAmount
    
        console.log(`your remaining balance is ${balance}`)
    }
    else{
        console.log("you have insuffent balance")
    }
    
    return balance;
}

async function cash_withdrwa(balance:number) {
    const answers = await inquirer.prompt([{
        name:"amount",
        type:"list",
        choices:['500','1000','2000','3000','5000',"otherAmount"],
        message:"select your transction type"
    }])
    
        
    switch(answers.amount){
        case "500" :
            if (balance> Number(answers.amount)){
                balance -= 500;
            console.log(`your remaining balance is ${balance}`)
            }
            else{
                console.log("you have insuffent balance")
            }
            break
        case ("1000") :
            if (balance> Number(answers.amount)){
                balance -= 1000;
            console.log(`your remaining balance is ${balance}`)
            }
            else{
                console.log("you have insuffent balance")
            }
            
            break
        case ("2000"):
            if (balance> Number(answers.amount)){
                balance -= 2000;
            console.log(`your remaining balance is ${balance}`)
            }
            else{
                console.log("you have insuffent balance")
            }
            break
        case ("3000"):
            if (balance> Number(answers.amount)){
                balance -= 3000;
            console.log(`your remaining balance is ${balance}`)
            }
            else{
                console.log("you have insuffent balance")
            }
            break
        case ("5000"):
            if (balance> Number(answers.amount)){
                balance -= 5000;
            console.log(`your remaining balance is ${balance}`)
            }
            else{
                console.log("you have insuffent balance")
            }
            break
        case  "otherAmount" :
            balance = await otherAmount(balance)
            
            break
    }
    return balance;
}
    
   


export default cash_withdrwa; 