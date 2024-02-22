import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { HighlightedType, Media } from '@gcba/ngx-obelisco/core/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'o-highlighted',
  templateUrl: './o-highlighted.component.html',
  styleUrls: ['./o-highlighted.component.scss']
})
export class OHighlightedComponent implements AfterContentInit {
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public isBgLight?: boolean = false;
  @Input() public type?: HighlightedType = 'banner';
  @Input() public image?: Media;
  @Input() public video?: Media;
  @Input() public iframe?: Media;
  @Input() public customClasses: string = '';

  @ContentChild('child', { read: ElementRef }) contentElementRef: ElementRef | undefined;

  hasChildren: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterContentInit() {
    this.contentElementRef && (this.hasChildren = true);
  }
}
