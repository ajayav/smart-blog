import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  issue: any = {};

  getIssue(data: NgForm) {
    this.issue = data;
  }

}
