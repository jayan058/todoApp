import { baseUrl } from "./config";

export interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}
import { deleteTodo } from "./deleteTodo";
import { updateTodoStatus, showUpdateForm } from "./updateTodoStatus";

export const fetchTodos = async () => {
  const todosList: HTMLUListElement = document.getElementById(
    "todosList"
  ) as HTMLUListElement;
  todosList.innerHTML = ""; // Clear previous todos
  try {
    const response = await fetch(`${baseUrl}/todos`);
    const todos: Todo[] = await response.json();
    todos.forEach((todo) => {
      const li = document.createElement("li");
      const statusClass = todo.isDone ? "done" : "not-done";
      li.classList.add(statusClass);
      li.innerHTML = `
                <div class="todoItem">
                    <div class="todoDescription">
                        <span class="todoName">${todo.name}</span>
                        <span class="statusText">${
                          todo.isDone ? "Done" : "Not Done"
                        }</span>
                    </div>
                    <div class="todoButtons">
                        <button onclick="showUpdateForm('${todo.id}', '${
        todo.name
      }', ${todo.isDone})" class="updateTodo">Update Todo</button>
                        <button onclick="updateTodoStatus('${
                          todo.id
                        }')" class="completedTodo">Mark as Done</button>
                        <button  class="deleteTodo">Delete</button>
                    </div>
                </div>
            `;
      todosList.appendChild(li);
      const deleteButton = li.querySelector(".deleteTodo");
      deleteButton
        ? deleteButton.addEventListener("click", () => deleteTodo(todo.id))
        : null;
      const completedTodo = li.querySelector(".completedTodo");
      completedTodo
        ? completedTodo.addEventListener("click", () =>
            updateTodoStatus(todo.id)
          )
        : null;
      const updateTodo = li.querySelector(".updateTodo");
      updateTodo
        ? updateTodo.addEventListener("click", () =>
            showUpdateForm(todo.id, todo.name, todo.isDone)
          )
        : null;
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
