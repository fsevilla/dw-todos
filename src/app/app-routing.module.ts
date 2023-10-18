import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'todos', component: TodosComponent, children: [
    { path: '', component: TodosListComponent },
    { path: 'new', component: NewTodoComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
