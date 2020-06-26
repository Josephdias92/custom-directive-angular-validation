import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[remaining-count]',
  providers: [{provide: NG_VALIDATORS, useExisting: RemainingDirective, multi: true}]
 })
export class RemainingDirective implements Validator {

  @Input('remaining-count')
  remaining;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (value > this.remaining) {
      return {
        remaining: true,
      }
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error("Method not implemented.");
  }
}
