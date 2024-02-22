import { Component, Input, AfterContentInit, ElementRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'o-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-banner.component.html',
  styleUrls: ['./o-banner.component.scss']
})
export class OBannerComponent implements AfterContentInit {
  @Input() public isDark?: boolean = false;
  @Input() public content?: string;
  @Input() public icon?: string;
  @Input() public customClasses: string = '';

  @ContentChild('child', { read: ElementRef }) contentElementRef: ElementRef | undefined;

  hasButton: boolean = false;

  constructor() {}

  ngAfterContentInit() {
    this.contentElementRef && (this.hasButton = true);
  }
}
