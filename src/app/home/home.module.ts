import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RaiseIssueComponent } from './raise-issue/raise-issue.component';



@NgModule({
  declarations: [
    HomeComponent,
    RaiseIssueComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    RaiseIssueComponent
  ]

})
export class HomeModule { }
