import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { MediaIframe } from 'ngx-obelisco-example/core/models';
import { OCustomContentDirective } from 'ngx-obelisco-example/directives';

@Component({
  selector: 'o-map',
  templateUrl: './o-map.component.html',
  styleUrls: ['./o-map.component.scss']
})
export class OMapComponent implements OnInit {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public iframe!: MediaIframe;
  @Input() public customClasses: string = '';

  safeIframe!: SafeHtml;
  safeIframeUrl!: SafeResourceUrl;

  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.validateInputs();
    this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe.src ? this.iframe.src : '');
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe.src ? this.iframe.src : '');
  }

  private validateInputs() {
    if (!this.title || !this.description || !this.iframe) {
      throw new Error('Title, description, iframe, iframeTitle, and mapUrl are required.');
    }
  }
}
