import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { HighlightedType, MediaIframe, MediaVideo, MediaImage } from '@gcba/ngx-obelisco/core/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OCustomContentDirective } from '@gcba/ngx-obelisco/directives';

@Component({
  selector: 'o-highlighted',
  templateUrl: './o-highlighted.component.html',
  styleUrls: ['./o-highlighted.component.scss']
})
export class OHighlightedComponent {
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public isBgLight?: boolean = false;
  @Input() public type?: HighlightedType = 'banner';
  @Input() public image?: MediaImage;
  @Input() public video?: MediaVideo;
  @Input() public iframe?: MediaIframe;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;
  @ContentChild('children', { read: ElementRef }) children: ElementRef | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
