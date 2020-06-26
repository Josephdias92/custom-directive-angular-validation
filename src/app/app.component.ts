import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  remaining = 10;

  remainingData = [this.remaining];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      addresses: this.fb.array([this.address()]),
      remaining: this.fb.array([this.numbers()]),
    });
  }

  ngOnInit(): void {
  }

  addMoreNumbers() {
    (this.form.get('remaining') as FormArray).push(this.numbers());
    this.remainingData.push(this.remaining);
  }

  private numbers() {
    return this.fb.group({
      num1: this.fb.control(''),
      num2: this.fb.control(''),
      num3: this.fb.control(''),
    });
  }

  private address() {
    return this.fb.group({
      postOffice: this.fb.control(''),
      homeAddress: this.fb.control(''),
      phoneNumber: this.fb.control(''),
    });
  }


}
