import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import tippy from 'tippy.js';
import { TooltipDirections } from 'ngx-obelisco-example/core/models';

@Directive({
  selector: '[oTooltip]'
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input() public description: string = '';
  @Input() public direction: TooltipDirections = 'top';
  @Input() public trigger: 'mouseenter' | 'click' = 'mouseenter';

  private tippyInstance: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createTooltip();
  }

  ngOnDestroy(): void {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth < 975) {
      this.createTooltip('top');
    } else {
      this.createTooltip();
    }
  }

  private createTooltip(newDirection: TooltipDirections = this.direction): void {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
    }

    if (
      window.innerWidth < 975 &&
      (newDirection === 'left' || newDirection === 'left-start' || newDirection === 'left-end')
    ) {
      newDirection = 'bottom';
    } else if (
      window.innerWidth < 975 &&
      (newDirection === 'right' || newDirection === 'right-start' || newDirection === 'right-end')
    ) {
      newDirection = 'top';
    }

    this.tippyInstance = tippy(this.elementRef.nativeElement, {
      content: this.description,
      placement: newDirection,
      offset: [0, 16],
      theme: 'custom-theme',
      trigger: this.trigger
    });
  }
}
