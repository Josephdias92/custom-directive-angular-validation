import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemainingDirective } from './remaining-validator.directive';
import { ShowRemainingDirective } from './show-remaining.validation';

@NgModule({
  declarations: [
    AppComponent,
    RemainingDirective,
    ShowRemainingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
