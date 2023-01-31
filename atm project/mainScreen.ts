import inquirer from "inquirer";
import cash_withdrwa from "./cash_withdrwa.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./Utility.js";


async function anothertranscation() {
    const ant = await inquirer.prompt([{
        name:"anotherTranscation" ,
        type:"list",
        choices:["yes","no"],
        message:"do you want to another transction"

}])
return ant.anotherTranscation
    
}

async function mainScreen(balance:number) {
        do {

    const options = await inquirer.prompt([{
        name:"menu",
        type:"list",
        choices:["Balance inquery","cash withdraw","cash deposit","Transfer","utility bills", "Exit"],
        message:"select your transcation type"
    }])
    switch(options.menu){
        
        case "cash withdraw":
            balance = await cash_withdrwa(balance)
            
            break
        case "cash deposit":
            console.log(balance)
            balance = await cashDeposit(balance)
            console.log(`your new balance is ${balance}`);
            break
        case "Transfer":
            balance = await transfer(balance)
            console.log(`your remaining balance is ${balance}`);
            break
        case "utility bills":
            balance = await Utility(balance)
            console.log(`your remaining amount is ${balance}`);
            break
        case "Exit":
             ant1 = "no"
            break 
        case "Balance inquery":
            console.log(`your acc balance is ${balance}`);
            break
               
    }
    if(options.menu !=="Exit"){
    var ant1 = await anothertranscation()
    }
    if (ant1 == "no"){
        console.log("thank you for yousing our service")
    }
    
}

while(ant1 != "no")

}
export default mainScreen;