import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoServiceService } from '../../services/todo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fe-academy-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  task: string;
  description: string;
  constructor(private todoService: TodoServiceService) {}

  addTodo() {
    const newTodo: Todo = {
      task: this.task,
      description: this.description,
      completed: false
    };

    this.todoService.addToList(newTodo);

    this.task = '';
    this.description = '';
  }
}
