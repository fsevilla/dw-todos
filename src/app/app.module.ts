import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { TodoDetailsComponent } from './pages/todos/todo-details/todo-details.component';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { MayusculasPipe } from './shared/pipes/mayusculas.pipe';
import { StatusDirective } from './shared/directives/status.directive';
import { AuthDirective } from './shared/directives/auth.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TodosComponent,
    NotFoundComponent,
    SignupComponent,
    TareasComponent,
    TodosListComponent,
    NewTodoComponent,
    TodoDetailsComponent,
    MayusculasPipe,
    StatusDirective,
    AuthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
