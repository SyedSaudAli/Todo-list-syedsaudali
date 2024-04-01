#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            name: "todo",
            message: "What's you want select to option!",
            type: "list",
            choices: ["Add", "Edit", "View", "Delete", "Exit"],
        },
    ]);
    if (todo.todo === "Add") {
        let addtodo = await inquirer.prompt([
            {
                name: "adds",
                message: "Add list",
                type: "input",
            },
        ]);
        todos.push(addtodo.adds);
        console.log(todos);
    }
    else if (todo.todo === "Edit") {
        let edittodo = await inquirer.prompt([
            {
                name: "edited",
                message: "Edit list",
                type: "list",
                choices: todos.map((item) => item),
            },
        ]);
        let addedittodo = await inquirer.prompt([
            {
                name: "editing",
                message: "Update list",
                type: "input",
            },
        ]);
        let newtodos = todos.filter((val) => val !== edittodo.edited);
        todos = [...newtodos, addedittodo.editing];
        console.log(todos);
    }
    else if (todo.todo === "View") {
        console.log(todos);
    }
    else if (todo.todo === "Delete") {
        let deletetodo = await inquirer.prompt([
            {
                name: "deletetodo",
                type: "list",
                message: "Delete you list",
                choices: todos.map((item) => item),
            },
        ]);
        let newtodos = todos.filter((val) => val !== deletetodo.deletetodo);
        todos = [...newtodos];
        console.log(todos);
    }
    else if (todo.todo === "Exit") {
        break;
    }
}
