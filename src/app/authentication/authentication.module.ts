import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
