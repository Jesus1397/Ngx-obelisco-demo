import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTooltipComponent } from './o-tooltip.component';

describe('OTooltipComponent', () => {
  let component: OTooltipComponent;
  let fixture: ComponentFixture<OTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTooltipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
