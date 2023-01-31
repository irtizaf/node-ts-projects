import inquirer from "inquirer";
const num = Math.ceil(Math.random() * 4);
const enemy = ["Cell beast", "mmajin buu", "frieza", "jiren", "broly"];
var heroHP = 100;
var enemyHP = 75;
const enemyattackDamage = Math.ceil(Math.random() * 25);
const heroattackDamage = Math.ceil(Math.random() * 25);
let x = true;
async function adventure() {
    while (x) {
        const game = await inquirer.prompt([{
                name: "selectAttack",
                type: "list",
                choices: ["Attack", "heal", "runaway", "exit"],
                message: "what you want to do now select options"
            }]);
        if (game.selectAttack == "Attack") {
            let x1 = true;
            console.log(`enemy healt before attack ${enemyHP} hero health before attack ${heroHP}`);
            console.log(`your enimeny is`, enemy[num]);
            while (x1) {
                enemyHP -= heroattackDamage;
                heroHP -= enemyattackDamage;
                console.log(`your strike hit enemy and remaining hp ${enemyHP} and hero damage is ${heroHP}`);
                if (enemyHP < 0) {
                    console.log("goku win");
                    x1 = false;
                    break;
                }
                if (heroHP < 1) {
                    console.log(`hero hp is two low hit and  by `, enemy[num], "you need to heal");
                    console.log(`${enemy[num]} win`);
                    x1 = false;
                    break;
                }
            }
        }
        else if (game.selectAttack == "heal") {
            heroHP += 25;
            console.log(`your new health is ${heroHP}`);
        }
        else if (game.selectAttack == "runaway") {
            console.log(`you run away from ${enemy[num]} come back and fight you monkey`);
        }
        else if (game.selectAttack == "exit") {
            x = false;
        }
    }
}
adventure();
