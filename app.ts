#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;

while (condition) {
  let todo = await inquirer.prompt([
    {
      name: "todo",
      message: "What's you want select to option!",
      type: "list",
      choices: ["Add", "Edit / Update", "View", "Delete", "Exit"],
    },
  ]);
  if (todo.todo === "Add") {
    let addtodo = await inquirer.prompt([
      {
        name: "adds",
        message: "Add list",
        type: "input",
        validate: function (value) {
          if (value.trim() !== "") {
            return true;
          }
          return "Please enter a non-empty value.";
        },
      },
    ]);
    todos.push(addtodo.adds.trim());
    console.log(todos);
  } else if (todo.todo === "Edit / Update") {
    let edittodo = await inquirer.prompt([
      {
        name: "edited",
        message: "Edit / Update list",
        type: "list",
        choices: todos.map((item) => item),
      },
    ]);
    let addedittodo = await inquirer.prompt([
      {
        name: "editing",
        message: "Update list",
        type: "input",
        validate: function (value) {
          if (value.trim() !== "") {
            return true;
          }
          return "Please enter a non-empty value.";
        },
      },
    ]);
    let newtodos = todos.filter((val) => val !== edittodo.edited);
    todos = [...newtodos, addedittodo.editing.trim()];
    console.log(todos);
  } else if (todo.todo === "View") {
    console.log(todos);
  } else if (todo.todo === "Delete") {
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
  } else if (todo.todo === "Exit") {
    break;
  }
}
