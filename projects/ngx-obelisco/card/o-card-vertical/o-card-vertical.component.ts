import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Media, Tags } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-card-vertical',
  templateUrl: './o-card-vertical.component.html',
  styleUrls: ['./o-card-vertical.component.scss', '../../scss/deck.scss']
})
export class OCardVerticalComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public eventName!: string;
  @Input() public headline!: string;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public imageThumb?: Media;
  @Input() public image?: Media;
  @Input() public tags!: Tags[];

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
