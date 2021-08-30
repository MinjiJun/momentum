const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",DeleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    todoList.appendChild(li);
}

function DeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    const newTodos = todos.filter(item => item.id !== parseInt(li.id));
    todos = newTodos;
    saveTodo();

    if(todos.length === 0) {
        todoList.classList.remove("todo-list-style");
        todoList.classList.add(HIDDEN_CLASSNAME);
        console.log(todos);
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
    todoList.classList.add("todo-list-style");
}

todoForm.addEventListener("submit", handleToDoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos === null || savedTodos === "[]") {
    todoList.classList.remove("todo-list-style");
    todoList.classList.add(HIDDEN_CLASSNAME);
    console.log(todoList);
} else {
    console.log(savedTodos);
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}