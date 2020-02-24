import { Injectable } from '@angular/core';
import { Todo } from '../todos/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: Todo[] = [];
  constructor() {}

  addToList(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  getTodoById (index) {
    return this.todos[index];
  }
}
