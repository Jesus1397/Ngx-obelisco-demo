import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ImageSizes } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-card-horizontal',
  templateUrl: './o-card-horizontal.component.html',
  styleUrls: ['./o-card-horizontal.component.scss']
})
export class OCardHorizontalComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public isInContainer: boolean = false;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public imageSize!: ImageSizes;
  @Input() public isSimpleCard: boolean = false;
  @Input() public iconTop!: string;
  @Input() public iconLeft!: string;
  @Input() public imageSrc!: string;
  @Input() public alt: string = 'descripción alternativa';

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
