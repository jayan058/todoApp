import "./style.css";
import { fetchTodos } from "./fetchTodos";
import { addTodo } from "./addTodo";
import { updateTodo } from "./updateTodo";

// Add event listener to the form
document.getElementById("todoForm")?.addEventListener("submit", addTodo);
document
  .getElementById("updateTodoForm")
  ?.addEventListener("submit", updateTodo);

// Fetch todos when the page loads
fetchTodos();
