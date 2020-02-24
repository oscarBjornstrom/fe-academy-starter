import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoServiceService } from '../../services/todo-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fe-academy-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = this.todoService.todos;
  constructor(
    private todoService: TodoServiceService,
    private router: Router,
  
  ) {}

  ngOnInit(): void {}

  goToEdit(index) {
    this.router.navigate(['details', index]);
  }
}
