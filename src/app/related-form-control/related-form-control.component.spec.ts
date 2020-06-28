import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedFormControlComponent } from './related-form-control.component';

describe('RelatedFormControlComponent', () => {
  let component: RelatedFormControlComponent;
  let fixture: ComponentFixture<RelatedFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
