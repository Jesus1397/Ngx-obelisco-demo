import { OnInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AlertTypes } from '@gcba/ngx-obelisco/core/models';

@Directive({
  selector: 'div[oAlert]',
  standalone: true
})
export class OAlertDirective implements OnInit {
  @Input() public type: AlertTypes = 'danger';
  @Input() public isDismissible: boolean = false;

  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}

  public ngOnInit() {
    this.renderer.setAttribute(
      this.element.nativeElement,
      'class',
      `alert alert-${this.type} ${this.isDismissible ? 'alert-dismissible show fade' : ''}`
    );
  }
}
