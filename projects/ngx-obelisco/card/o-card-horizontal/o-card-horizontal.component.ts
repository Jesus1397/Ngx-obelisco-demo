import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ImageMediaSizes, Media } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-card-horizontal',
  templateUrl: './o-card-horizontal.component.html',
  styleUrls: ['./o-card-horizontal.component.scss', '../../scss/deck.scss']
})
export class OCardHorizontalComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public isInContainer: boolean = false;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public image?: Media;
  @Input() public isSimpleCard: boolean = false;
  @Input() public iconTop!: string;
  @Input() public iconLeft!: string;

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }

  sizeToPx = (size: ImageMediaSizes): number => {
    switch (size) {
      case 'lg':
        return 96;
      case 'md':
        return 96;
      case 'sm':
        return 64;
    }
  };
}
