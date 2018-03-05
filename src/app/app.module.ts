import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';
import { TasksService } from './services/tasks.service';

const appRoutes : Routes = [
  {path: "login", component: LoginComponent},
  {path: "tasks", component: TaskComponent},
  {path: "register", component: RegisterComponent},
  {path: "register", component: RegisterComponent},
  {path: "", redirectTo : "login", pathMatch : "full"}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule
  ],
  providers: [AuthenticationService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
