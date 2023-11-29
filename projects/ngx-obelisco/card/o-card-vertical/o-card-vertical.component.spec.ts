import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardVerticalComponent } from './o-card-vertical.component';

describe('OCardVerticalComponent', () => {
  let component: OCardVerticalComponent;
  let fixture: ComponentFixture<OCardVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardVerticalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
