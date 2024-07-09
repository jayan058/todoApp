import * as todosModels from "./../models/todos";
import { ITodo } from "./../interface/todo";

export function showAllTodos() {
  return todosModels.showAllTodos();
}

export function addATodo(todo: ITodo) {
  todosModels.createATodo(todo);
}

export function updateATodo(id: string, name: string, isDone: boolean) {
  const todo = todosModels.todos.find((todo) => todo.id === id);

  if (todo) {
    todo.name = name;
    todo.isDone = isDone;
    return `Successfully updated Todo with id ${id}`;
  } else {
    return "Oops Todo With That ID doesn't exist";
  }
}

export function deleteATodo(id: string) {
  const todo = todosModels.todos.find((todo) => todo.id === id);

  if (todo) {
    const updatedTodos = todosModels.todos.filter((todo) => todo.id !== id);
    todosModels.todos.length = 0; // Clear the original array
    todosModels.todos.push(...updatedTodos);
    return `Successfully deleted Todo with id ${id}`;
  } else {
    return "Oops Todo With That ID doesnt exist";
  }
}

export function completedATodo(id: string) {
  const todo = todosModels.todos.find((todo) => todo.id === id);

  if (todo) {
    todo.isDone = true;
    return `Successfully updated Todo status with id ${id}`;
  } else {
    return "Oops Todo With That ID doesnt exist";
  }
}
