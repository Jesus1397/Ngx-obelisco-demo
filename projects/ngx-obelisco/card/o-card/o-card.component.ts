import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';
import { MediaImage, CardBadge } from 'ngx-obelisco-example/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-example/directives';

@Component({
  selector: 'o-card',
  templateUrl: './o-card.component.html',
  styleUrls: ['./o-card.component.scss', '../../scss/deck.scss']
})
export class OCardComponent implements AfterViewInit, AfterContentInit {
  @Input() public isHorizontal?: boolean = false;
  @Input() public isBordered?: boolean = false;
  @Input() public isThemeCard?: boolean = false;
  @Input() public isTitleTruncate?: boolean = false;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public headline?: string;
  @Input() public cardBadges?: CardBadge[];
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public image?: MediaImage;
  @Input() public icon?: string;
  @Input() public customClasses: string = '';

  @ViewChild('card', { read: ElementRef }) card: ElementRef | undefined;

  @ContentChild('info', { read: ElementRef }) contentElementRef: ElementRef | undefined;
  hasInfo: boolean = false;
  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.link && this.card?.nativeElement) {
      this.renderer.setAttribute(this.card?.nativeElement, 'href', this.link);
    }
  }

  ngAfterContentInit() {
    this.contentElementRef && (this.hasInfo = true);
  }
}
