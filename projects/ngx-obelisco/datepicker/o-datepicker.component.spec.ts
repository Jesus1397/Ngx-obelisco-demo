import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODatepickerComponent } from './o-datepicker.component';

describe('ODatepickerComponent', () => {
  let component: ODatepickerComponent;
  let fixture: ComponentFixture<ODatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ODatepickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ODatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
