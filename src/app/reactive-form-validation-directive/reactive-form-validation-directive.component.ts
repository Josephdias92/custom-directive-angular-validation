import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation-directive',
  templateUrl: './reactive-form-validation-directive.component.html',
  styleUrls: ['./reactive-form-validation-directive.component.scss']
})
export class ReactiveFormValidationDirectiveComponent implements OnInit {

  form: FormGroup;

  remainingCount = 10;

  remainingData = [this.remainingCount];

  get remaining(): FormArray {
    return this.form.get('remaining') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      remaining: this.fb.array([this.numbers()]),
      name: this.fb.control('Firstname'),
      relatedName: this.fb.control('relatedName')
    });
  }

  ngOnInit(): void {
  }

  addMoreNumbers() {
    (this.form.get('remaining') as FormArray).push(this.numbers());
    this.remainingData.push(this.remainingCount);
  }

  private numbers() {
    return this.fb.group({
      num1: this.fb.control(0),
      num2: this.fb.control(0),
      num3: this.fb.control(0),
    });
  }
}
