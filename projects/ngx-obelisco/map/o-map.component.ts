import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { Media } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-map',
  templateUrl: './o-map.component.html',
  styleUrls: ['./o-map.component.scss']
})
export class OMapComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() iframe!: Media;
  safeIframe!: SafeHtml;
  safeIframeUrl!: SafeResourceUrl;

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
