import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerApiComponent } from './datepicker-api.component';

describe('DatepickerApiComponent', () => {
  let component: DatepickerApiComponent;
  let fixture: ComponentFixture<DatepickerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
