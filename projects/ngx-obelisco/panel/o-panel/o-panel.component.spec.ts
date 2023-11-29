import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPanelComponent } from './o-panel.component';

describe('OPanelComponent', () => {
  let component: OPanelComponent;
  let fixture: ComponentFixture<OPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
