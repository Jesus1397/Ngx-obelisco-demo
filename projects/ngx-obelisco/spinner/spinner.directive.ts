import { OnInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { SpinnerTypes } from 'ngx-obelisco-example/core/models';
import { Sizes } from 'ngx-obelisco-example/core/models';

@Directive({
  selector: 'div[oSpinner]',
  standalone: true
})
export class OSpinnerDirective implements OnInit {
  @Input() public type: SpinnerTypes = 'info';
  @Input() public size: Sizes = 'md';
  @Input() public isExpandable: boolean = false;

  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}

  public ngOnInit() {
    this.renderer.setAttribute(
      this.element.nativeElement,
      'class',
      this.isExpandable
        ? `spinner-block text-${this.type}`
        : `spinner-border text-${this.type} ${
            !!this.size && this.size == 'md' ? '' : `spinner-border-${this.size}`
          } `.trim()
    );
  }
}
