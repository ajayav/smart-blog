import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { RaiseIssueComponent } from './raise-issue/raise-issue.component';



@NgModule({
  declarations: [
    HomeComponent,
    EnquiryComponent,
    RegisterComplaintComponent,
    RaiseIssueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
