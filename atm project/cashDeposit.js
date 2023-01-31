import inquirer from "inquirer";
async function cashDeposit(balance) {
    const amount = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "Enter your amount"
        }]);
    return balance += amount.amount;
}
export default cashDeposit;
