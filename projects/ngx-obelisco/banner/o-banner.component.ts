import { Component, Input, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OCustomContentDirective } from '@gcba/ngx-obelisco/directives';

@Component({
  selector: 'o-banner',
  standalone: true,
  imports: [CommonModule, OCustomContentDirective],
  templateUrl: './o-banner.component.html',
  styleUrls: ['./o-banner.component.scss']
})
export class OBannerComponent {
  @Input() public isDark?: boolean = false;
  @Input() public content?: string;
  @Input() public icon?: string;
  @Input() public customClasses: string = '';

  @ContentChild('children', { static: true }) children?: ElementRef<any>;
  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;

  constructor() {}
}
