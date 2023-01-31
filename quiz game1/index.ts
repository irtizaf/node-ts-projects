import inquirer from "inquirer";

async function quiz() {
    

const response = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        choices: ["karachi", "lahore", "islamabad"],
        message: "What is the capital of Pakistan?",
    },
    {
        name: "Question2",
        type: "list",
        choices: ["december", "februry", "july"],
        message: "quaid e azam bithday month",
        when(response){
            return response.Question1 == "islamabad";
        }
    },
    {
        name: "Question3",
        type: "list",
        choices: ["january", "september", "october"],
        message: "Imran khan birthday month",
        when(response){
            return response.Question2 == "december";
        }
    },
]);

// console.log(response.Question1, response.Question2, response.Question3);

let counter = 0;
if (response.Question1 == "islamabad") {
    console.log("right answer");
    counter+=10;
    if (response.Question2 == "december") {
        console.log("your second answer is risgt as well")
        counter+=10;
        if (response.Question3 == "october") {
            console.log("your third answer is right as well")
            counter+=10;
        }
        else{
            console.log("wrong3")
        }
    }
    else{
        console.log("wrong2")
    }
    

}
 else {
    console.log("Wrong1")
 }
console.log(`Your score is ${counter}`);
}
quiz()