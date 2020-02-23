import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'fe-academy-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
  ];
  constructor() {}

  ngOnInit(): void {}

  addToList(newTodo: Todo) {
    this.todos.push(newTodo);
  }
}
