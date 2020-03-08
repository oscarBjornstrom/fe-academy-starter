import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable()
export class AppService {
  private readonly _todos = new BehaviorSubject<Todo[]>([
    {
      id: '123123123',
      name: 'do dishes',
      description: 'time to clean',
      completed: false
    },
    {
      id: '1231qweqwasd',
      name: 'clean toilet',
      description: 'time to clean',
      completed: false
    }
  ]);

  todos$ = this._todos.asObservable();

  get todos() {
    return this._todos.getValue();
  }

  set todos(val: Todo[]) {
    this._todos.next(val);
  }

  getTodoById(id: string): Todo {
    return this.todos.find(Todo => Todo.id === id);
  }

  addTodo(body: Todo) {
    const newTodo = {
      ...body,
      id: Math.random()
        .toString(36)
        .substr(2, 9)
    };

    this.todos = [...this.todos, newTodo];

    return newTodo;
  }

  deleteTodoById(id: string) {
    this.todos = this.todos.filter(Todo => Todo.id !== id);

    return `Todo with id:${id} was deleted`;
  }

  updateTodoById(id: string, body: Todo) {
    let todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index] = {
        ...todo,
        ...body
      };
      this.todos = [...this.todos];
    }

    return `Todo with id:${id} was updated`;
  }

  items = ['Africa', 'Asia', 'North America', 'South America', 'Pacific'];

  getFilteredItems(query): string[] {
    return this.items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }
}
