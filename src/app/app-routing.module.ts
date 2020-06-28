import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatedFormControlComponent } from './related-form-control/related-form-control.component';
import { ReactiveFormValidationDirectiveComponent } from './reactive-form-validation-directive/reactive-form-validation-directive.component';


const routes: Routes = [{
  path: 'related-form',
  component: RelatedFormControlComponent,
}, {
  path: 'directive-validation',
  component: ReactiveFormValidationDirectiveComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
