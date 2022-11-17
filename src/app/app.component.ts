import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Infotech';
  login(data:NgForm){
    console.warn(data);
  }
}
