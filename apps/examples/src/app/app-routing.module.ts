import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './routing-examples/home/home.component';
import { TodosComponent } from './routing-examples/todos/todos.component';
import { NotFoundComponent } from './routing-examples/not-found/not-found.component';
import { TodoDetailComponent } from './routing-examples/todos/todo-detail/todo-detail.component';
import { AddTodoComponent } from './routing-examples/todos/add-todo/add-todo.component';
import { AuthGuard } from './routing-examples/auth/auth.guard';

const routes: Route[] = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'todos',
        component: TodosComponent,
        canActivate: [AuthGuard],
        children: [
        {
            path: 'details/:id', component:TodoDetailComponent, children: [
                {path: 'add', component: AddTodoComponent}
            ]
        },
        {
            path: 'add-todo', component: AddTodoComponent
        }
     ]
     },
    // {path: 'todos/:id', component: TodoDetailComponent},
    {path: '**', component: NotFoundComponent}
  ]
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}