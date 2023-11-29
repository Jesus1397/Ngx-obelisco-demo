import { ElementRef, Renderer2 } from '@angular/core';
import { OSpinnerDirective } from './spinner.directive';

describe('SpinnerDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new OSpinnerDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
