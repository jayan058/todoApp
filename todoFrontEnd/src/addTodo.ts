import { baseUrl } from "./config";

import { fetchTodos, Todo } from "./fetchTodos";

export const addTodo = async (e: Event) => {
  e.preventDefault(); // Prevent form from submitting normally
  const todoInput: HTMLInputElement = document.getElementById(
    "todoInput"
  ) as HTMLInputElement;
  const todoName: string = todoInput.value;

  try {
    const response = await fetch(`${baseUrl}/todos/addTodos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: todoName, isDone: false } as Todo), 
    });
    if (response.ok) {
      fetchTodos(); // Refresh the todo list
      todoInput.value = ""; // Clear the input field
    } else {
      console.error("Error adding todo:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};
