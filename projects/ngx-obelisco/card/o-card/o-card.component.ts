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
import { Media, Tags } from '@gcba/ngx-obelisco/core/models';

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
  @Input() public tags?: Tags[];
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public image?: Media;
  @Input() public icon?: string;

  @ViewChild('card', { read: ElementRef }) card: ElementRef | undefined;

  @ContentChild('info', { read: ElementRef }) contentElementRef: ElementRef | undefined;
  hasInfo: boolean = false;

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
