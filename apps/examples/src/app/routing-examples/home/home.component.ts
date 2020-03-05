import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo(todo) {
    this.todosService.addTodo(todo);
  }
}
