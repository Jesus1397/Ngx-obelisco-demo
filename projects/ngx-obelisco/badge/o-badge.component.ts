import { Component, Input } from '@angular/core';
import { BadgeTypes } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'o-badge',
  templateUrl: './o-badge.component.html',
  styleUrls: ['./o-badge.component.scss']
})
export class OBadgeComponent {
  @Input() public type?: BadgeTypes;
  @Input() public link?: string;
  @Input() public route?: string;
  @Input() public customClasses?: string;
}
