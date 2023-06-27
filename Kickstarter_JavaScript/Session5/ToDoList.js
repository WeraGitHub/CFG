const colour = prompt("Choose a colour");
localStorage.setItem("colour", colour);
console.log(localStorage.getItem("colour"));

// Retrieve todos from local storage if available
const storedTodos = localStorage.getItem("todos");
let todos;
if (storedTodos) {
  todos = JSON.parse(storedTodos);
} else {
  todos = [];
}

// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos
function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  function handleChange(index) {
    return function () {
      toggleTodoCompleted(index);
    };
  }

  function handleRemove(index) {
    return function () {
      removeTodo(index);
    };
  }

  for (let index = 0; index < todos.length; index++) {
    const todo = todos[index];

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", handleChange(index));

    const text = document.createTextNode(todo.text);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", handleRemove(index));

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(removeBtn);

    todoList.appendChild(listItem);
  }
}

// Add a new todo
function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();

  if (text !== "") {
    todos.push({ text, completed: false });
    input.value = "";
    saveTodos();
    renderTodos();
  }
}

// Toggle todo completed state
function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// Remove todo
function removeTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Event listener for the input field
function handleKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

// Event listener for the title field
function handleKeyDownTitle(event) {
  if (event.key === "Enter") {
    localStorage.setItem(
      "todo-title",
      document.getElementById("todo-title").innerText
    );
  }
}

document
  .getElementById("todo-input")
  .addEventListener("keydown", handleKeyDown);

// Initial render
renderTodos();
