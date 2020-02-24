import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo.model';
import { Location } from '@angular/common';

@Component({
  selector: 'fe-academy-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService: TodoServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      val => (this.todo = this.todoService.getTodoById(val.id))
    );
  }

  goBack() {
    this.location.back();
  }
}
