import { baseUrl } from "./config";
import { fetchTodos } from "./fetchTodos";

export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/todos/deleteTodos/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTodos(); // Refresh the todo list
    } else {
      console.error("Error deleting todo:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
