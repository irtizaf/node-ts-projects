#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import animation from "chalk-animation";
let score = 0
let play = true
let number = Math.ceil( Math.random() *3 + 1)
console.log(number)

const sleep = () => {
    return new Promise((resolve) => {

        setTimeout((resolve), 2000);
    })
}

async function welcome() {
    let ani =  animation.neon("welcome to my guessing the game ")
    await sleep();
    ani.stop();
    let an = animation.rainbow(`     .d88b. 888  888 .d88b. .d8888b .d8888b  
    d88P"88b888  888d8P  Y8b88K     88K      
    888  888888  88888888888"Y8888b."Y8888b. 
    Y88b 888Y88b 888Y8b.         X88     X88 
     "Y88888 "Y88888 "Y8888  88888P' 88888P' 
         888                                 
    Y8b d88P                                 
     "Y88P" `)
    await sleep();
    an.stop();
    
}

async function gussing_number () {
while (play){
  
    await inquirer.prompt([{
        type : "number",
        name : "guess_number",
        message: "enter a number 1 to 4"

}])

.then((answers)=>{


if (number === answers.guess_number) {
    score += 10
    console.log(chalk.magenta("you guess the right number"))
    console.log(score)
    play = false
    }
else{
    console.log(chalk.yellowBright( "you guess the wrong number try again"))
    
    
}
})
}
}
await welcome()
gussing_number()