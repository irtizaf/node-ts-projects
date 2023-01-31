import inquirer from "inquirer";

async function again() {
    const again = await inquirer.prompt([{
        name:"Again",
        type:"list",
        choices:["yes","no"],
        message:"do you want to check word count again"
        
    }])
    if(again.Again == "yes"){
        return again.Again
    }
    else{
        return again.Again
    }
    
}
async function word_counter() {
    do{
    const answers = await inquirer.prompt([{
        name:"word",
        type:"input",
        message:"enter your sentance"

    }])
    //console.log(answers.word)
    const x = answers.word.trim()// removes the start and end spaces from seentance
    console.log(x)
    let y = x.replace(/ +/g, " ")// replace all the exta spaces from sentance
    console.log( `your word count is ${y.split(" ").length}`)// make arry of string from split function abd check length
    //console.log(y.length)
    
    var x1 = await again()
    }
    while(x1 != "no")
}
word_counter()