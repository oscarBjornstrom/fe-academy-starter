import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { TodosComponent } from './views/todos/todos.component';
import { AuthComponent } from './views/auth/auth.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      {
        path: 'add',
        component: AddTodoComponent
      }
    ]
  },
  {
    path: 'details/:id',
    component: TodoDetailsComponent
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
