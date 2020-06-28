import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

import { AppService } from '../app.service';

@Directive({
  selector: '[remaining-count]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => RemainingDirective), multi: true}],
 })
export class RemainingDirective implements Validator {

  @Input('remaining-count')
  remaining;

  constructor(private appService: AppService) {
  }

  validate(control: AbstractControl): ValidationErrors {
    console.log(control)
    const isInvalid = Number(this.appService.showRemaining(control.value, this.remaining)) < 0;
    if (isInvalid) {
      return {
        remaining: true,
      }
    }
    return null;
  }
}
