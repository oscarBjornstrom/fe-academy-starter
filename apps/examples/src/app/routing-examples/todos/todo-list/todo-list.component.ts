import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = this.todoService.todos;
  
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

}
