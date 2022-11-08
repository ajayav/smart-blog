import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]= [];
  addTask(task:string){
    this.list.push({id:this.list.length, name:task});
    console.log(this.list);
  }
  removeTask(id:number){
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id); 

  }

}
