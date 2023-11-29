import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardHorizontalComponent } from './o-card-horizontal.component';

describe('OCardHorizontalComponent', () => {
  let component: OCardHorizontalComponent;
  let fixture: ComponentFixture<OCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
