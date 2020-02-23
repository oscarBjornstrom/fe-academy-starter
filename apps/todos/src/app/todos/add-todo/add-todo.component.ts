import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'fe-academy-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  task: string;
  description: string;
  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    const newTodo: Todo = {
      task: this.task,
      description: this.description,
      completed: false
    }

    this.todoAdded.emit(newTodo);

    this.task = '';
    this.description = '';
  }

}
