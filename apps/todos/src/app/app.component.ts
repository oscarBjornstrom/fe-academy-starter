import { Component } from '@angular/core';
import { Todo } from '@fe-academy/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fe-academy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.getTodos();
    });
  }
}
