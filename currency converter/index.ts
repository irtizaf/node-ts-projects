import inquirer from "inquirer";
var converting:any = {
    "pkr":{
        "usd":0.0044,
        "pound":0.0036,
        "rial":0.017,
        "dihram": 0.016,
        "pkr":1
    },
    "usd":{
        "pkr":227.25,
        "pound":0.83,
        "rial":3.76,
        "dihram":3.67,
        "usd":1
    },
    "pound":{
        "usd":1.21,
        "pkr":274.81,
        "rial":4.55,
        "dirham":4.44,
        "pound":1
    },
    "rial":{
        "usd":0.27,
        "pkr":60.46,
        "pound":0.22,
        "dirham":0.98,
        "rial":1
    },
    "dirham":{
        "usd":0.27,
        "pkr":61.87,
        "pound":0.23,
        "rial":1.02,
        "dirham":1

    }
}

interface abc {
    from: "usd"|"pound"|"pkr"|"rial"|"dirham",
    to : "usd"|"pound"|"Pkr"|"rial"|"dirham",
    amount: number
}
async function again() {
    const again = await inquirer.prompt([{
        name:"Again",
        type:"list",
        choices:["yes","no"],
        message:"do you want to continue press"
        
    }])
    if(again.Again == "yes"){
        return again.Again
    }
    else{
        return again.Again
    }
    
}
async function currency() {
    
do {
    const answers: abc = await inquirer.prompt([{
        name:"from",
        type:"list",
        choices:["usd","pound","pkr","rial","dirham"],
        message:"select currency you want to conver"
    },   
    {
        name:"to",
        type:"list",
        choices:["usd","pound","pkr","rial","dirham"],
        message:"select currency you want to conver"
    },
    {
        name:"amount",
        type:"number",
        message:"how many currency you want to convert"
    }
]);
    const {from , to, amount} = answers;

    if (from && to && amount){
        let result =  converting[from][to] * amount
       console.log(`you converted ${from} to ${to} and your amount is ${result}`)
    }
    else {
        console.log("you enter invalid currency")
    }
    
    var x = await again()

}
while(x != "no")
}
currency()