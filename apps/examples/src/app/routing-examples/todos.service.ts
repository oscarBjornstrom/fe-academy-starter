import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos = [];
  constructor() { }

  addTodo(newTodo) {
    this.todos.push(newTodo)
  }
}
