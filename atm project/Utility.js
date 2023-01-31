import inquirer from "inquirer";
const electricBill = Math.ceil((Math.random() * 1000 + 1));
const gasBill = Math.ceil((Math.random() * 1000 + 1));
const waterBill = Math.ceil((Math.random() * 1000 + 1));
async function Utility(balance) {
    const input = await inquirer.prompt([{
            name: "Billtype",
            type: "list",
            choices: ["electric", "gas", "water"],
            message: "select your bill for payment"
        }]);
    if (input.Billtype === "electric") {
        console.log(`your electric bill is ${electricBill}`);
        balance -= electricBill;
    }
    else if (input.Billtype === "gas") {
        console.log(`your electric bill is ${gasBill}`);
        balance -= gasBill;
    }
    else if (input.Billtype === "water") {
        console.log(`your electric bill is ${waterBill}`);
        balance -= waterBill;
    }
    return balance;
}
export default Utility;
