import { baseUrl } from "./config";
import { fetchTodos, Todo } from "./fetchTodos";

export const updateTodo = async (e: Event) => {
  e.preventDefault();
  const id: string = (
    document.getElementById("updateTodoId") as HTMLInputElement
  ).value;
  const name: string = (
    document.getElementById("updateTodoName") as HTMLInputElement
  ).value;
  const isDone: boolean = (
    document.getElementById("updateTodoIsDone") as HTMLInputElement
  ).checked;

  try {
    const response = await fetch(`${baseUrl}/todos/updateTodos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, isDone } as Todo),
    });
    if (response.ok) {
      fetchTodos(); // Refresh the todo list
      const modal = document.getElementById("updateTodoModal");
      if (modal) {
        modal.style.display = "none";
      }
    } else {
      console.error("Error updating todo:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};
