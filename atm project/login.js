import user from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answers = await inquirer.prompt([{
            name: "accountnumber",
            type: "number",
            message: "enter your account number"
        },
        {
            name: "pin",
            type: "password",
            message: "enter your pin"
        }]);
    let users = user.find(x => x.acc_no == answers.accountnumber && x.pin == answers.pin);
    if (typeof users != "undefined") {
        console.log(`welcome ${users.name}`);
        await mainScreen(users.balance);
    }
    else {
        console.log("you enter invalid Pin or account number");
    }
}
export default login;
