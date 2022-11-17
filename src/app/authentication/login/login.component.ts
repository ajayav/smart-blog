import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../generics/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
userDetails:any=''
login(user:Login){
  console.warn(user)
  this.userDetails = user;
}
}
