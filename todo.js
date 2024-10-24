console.log("todo.js is running");
const fs = require("fs");

//Add a to do item
const addTodo = (title) => {
  const todos = fetchTodos();
  const todo = {
    title,
  };

  const duplicatetodos = todos.filter((todo) => todo.title === title);
  if (duplicatetodos.length === 0) {
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

//Delete a todo item
const deleteTodo = (title) => {
  let todos = fetchTodos();
  let filteredtodos = todos.filter((todo) => todo.title !== title);
  saveTodos(filteredtodos);

  return todos.length !== filteredtodos.length;
};

//Read a todo item
const readTodo = (title) => {
  let todos = fetchTodos();
  let filteredTodos = todos.filter((todo) => todo.title === title);
  return filteredTodos[0];
};

//List all todo items
const listTodos = () => {
  return fetchTodos();
};

//Utility functions
const fetchTodos = () => {
  try {
    let todosString = fs.readFileSync("tasks-data.json");
    return JSON.parse(todosString);
  } catch (e) {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeFileSync("tasks-data.json", JSON.stringify(todos));
};

const logTodo = (todo) => {
  console.log("## ---## --- ##");
  console.log(`It's title is: ${todo.title}`);
};

//Exporting function
module.exports = {
  addTodo,
  deleteTodo,
  readTodo,
  listTodos,
  logTodo,
};
