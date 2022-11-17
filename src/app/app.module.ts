import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HrmsModule } from './hrms/hrms.module';
import { ChildComponent } from './child/child.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BitEnumPipe } from './pipes/bit-enum.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    BitEnumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HrmsModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
