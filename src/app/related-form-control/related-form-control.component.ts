import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-related-form-control',
  templateUrl: './related-form-control.component.html',
  styleUrls: ['./related-form-control.component.scss']
})
export class RelatedFormControlComponent implements OnInit {

  form: FormGroup;

  list = ['4', '6', '8'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectMe: this.fb.control(''),
      controlLength: this.fb.control(''),
    }, {
      validators: [this.relatedControl]
    })
  }

  relatedControl(control: AbstractControl) {
    const error = Validators.maxLength(+control.get('selectMe').value)(control.get('controlLength'));
    if (error) {
      control.get('controlLength').setErrors({invalid: true});
    }
    return error;
  }

  ngOnInit(): void {
  }

}
