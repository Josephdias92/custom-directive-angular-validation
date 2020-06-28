import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemainingDirective } from './reactive-form-validation-directive/remaining-validator.directive';
import { ShowRemainingDirective } from './reactive-form-validation-directive/show-remaining.validation';
import { RelatedFormControlComponent } from './related-form-control/related-form-control.component';
import { ReactiveFormValidationDirectiveComponent } from './reactive-form-validation-directive/reactive-form-validation-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    RemainingDirective,
    ShowRemainingDirective,
    RelatedFormControlComponent,
    ReactiveFormValidationDirectiveComponent,
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
