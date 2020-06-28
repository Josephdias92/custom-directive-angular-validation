import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidationDirectiveComponent } from './reactive-form-validation-directive.component';

describe('ReactiveFormValidationDirectiveComponent', () => {
  let component: ReactiveFormValidationDirectiveComponent;
  let fixture: ComponentFixture<ReactiveFormValidationDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidationDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidationDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
