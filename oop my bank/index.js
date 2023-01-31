//import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse(" Welcome to Piaician Bank");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
class Transaction {
    AccNo;
    AccHolderName;
    Balance;
    constructor(accno, name, bal) {
        this.AccNo = accno;
        this.AccHolderName = name;
        this.Balance = bal;
    }
    BalanceCheck() {
        if (this.Balance < 0) {
            console.log('Insufficient Balance Please Deposit');
        }
        else {
            console.log('The Balance is :' + this.Balance);
        }
    }
    Deposit(amount) {
        this.Balance += amount;
        console.log('Amount of ' + amount + ' Deposited Successfully');
        console.log(chalk.green('The Balance is :' + this.Balance));
    }
    Withdraw(amount) {
        if (amount > this.Balance) {
            console.log(chalk.blue('Not Enough Balance'));
        }
        else {
            this.Balance -= amount;
            console.log('Amount of ' + amount + ' withdrawn Successfully');
            console.log(chalk.yellow('The Balance is :' + this.Balance));
        }
    }
}
let new1 = new Transaction(3000, 'Muhammad Irtaza', 0);
new1.BalanceCheck();
new1.Deposit(9000);
new1.Withdraw(7000);
new1.Withdraw(8500);
