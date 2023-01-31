import inquirer from 'inquirer'



let todolist:string[] = []

async function again() {
    const answer =  await inquirer.prompt([{
        name:"again",
        type:"list",
        choices:["yes","no"]
    }])
    return answer.again
    
}

async function list() {
    do{
    const answers = await inquirer.prompt([{
        name:"tasks",
        type:"list",
        choices:["Add_Task","Display_task","RemoveTask","exit"]
    }])
    
    if (answers.tasks === "Add_Task"){
        const newtsk = await inquirer.prompt([{
            name:"newTask",
            type:"input",
            message:"enter new task"
        }])
        todolist.push(newtsk.newTask)
        
        
    }
    else if (answers.tasks ==="Display_task"){
        todolist.forEach(x => console.log(x))
        
    }
    else if (answers.tasks ==="RemoveTask" ) {
            const removetask = await inquirer.prompt([{
                name:"remove",
                type:"input",
                message:"please enter which task you want to remove"
            }])
            
         const c1 = todolist.indexOf(removetask.remove)
            if (c1 != -1)
                todolist.splice(c1,1)
            else{
                console.log("task is not in the list")
            }
            
    }
    if (answers.tasks !=="exit"){
        var x1 = await again()
   
    }
    else {
        x1 = "no"
        console.log("thank you")
    }
    
    
}   
    
    while(x1 != "no" )
    
}
list()