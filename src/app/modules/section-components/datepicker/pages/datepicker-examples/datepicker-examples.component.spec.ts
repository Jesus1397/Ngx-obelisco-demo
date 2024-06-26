import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerExamplesComponent } from './datepicker-examples.component';

describe('DatepickerExamplesComponent', () => {
  let component: DatepickerExamplesComponent;
  let fixture: ComponentFixture<DatepickerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
