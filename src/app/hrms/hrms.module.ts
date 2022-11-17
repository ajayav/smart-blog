import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule 
  ],
  exports: [
    TodoComponent
  ]
})
export class HrmsModule { }
