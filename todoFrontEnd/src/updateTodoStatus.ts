import { baseUrl } from "./config";
import { fetchTodos } from "./fetchTodos";

export const showUpdateForm = (id: string, name: string, isDone: boolean) => {
  const modal = document.getElementById("updateTodoModal");
  if (modal) {
    modal.style.display = "block";
  }

  (document.getElementById("updateTodoId") as HTMLInputElement).value = id;
  (document.getElementById("updateTodoName") as HTMLInputElement).value = name;
  (document.getElementById("updateTodoIsDone") as HTMLInputElement).checked =
    isDone;
};

export const updateTodoStatus = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/todos/completedTodo/${id}`, {
      method: "PUT",
    });
    if (response.ok) {
      fetchTodos(); // Refresh the todo list
    } else {
      console.error("Error updating todo:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};
