#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 3000)
  })
}
async function welcome() {
  let rainbow = chalkAnimation.rainbow('HELLO BUDDYS THIS IS IRTAZA CALCULATOR');
  await sleep();
  rainbow.stop();
  console.log(chalk.green(`\n                    HOW TO USE ????\n\n                    *First you enter number\n                    *Then you select operation\n                    *Then press enter`));
console.log(chalk.white(`\n _______
|  _______  |
| | JO           0. | |
| |_______| |
|  _ _ _   _  |
| | 7 | 8 | 9 | | + | |
| |_|_|_| |_| |
| | 4 | 5 | 6 | | - | |
| |_|_|_| |_| |
| | 1 | 2 | 3 | | x | |
| |_|_|_| |_| |
| | . | 0 | = | | / | |
| |_|_|_| |_| |
|_______|\n`))
}
await welcome()
async function askQuestion() {
  const answers = await inquirer
    .prompt([
      {
        type: "number",
        name: "num1",
        message: 'Enter Number 1'
      },
      {
        type: "number",
        name: "num2",
        message: 'Enter Number 2'
      },
      {
        type: "list",
        name: 'operator',
        message: "which operation you choose?",
        choices: ['Addition', 'Multiplication', 'Subtract', "Division"]
      },
    ])
  if (answers.operator == "Addition") {
    console.log(chalk.green(`\n${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}\n`))
  } else if (answers.operator == "Subtract") {
    console.log(chalk.green(`\n${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}\n`))
  } else if (answers.operator == "Multiplication") {
    console.log(chalk.green(`\n${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}\n`))
  } else if (answers.operator == "Division") {
    console.log(chalk.green(`\n${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}\n`))
  }
}

async function start() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: 'restart',
      message: "Do you want to continue?? press y or n"
    })
  } while (again.restart == 'y' || again.restart == "Y" || again.restart == 'yes' || again.restart == 'YES')
}
start()