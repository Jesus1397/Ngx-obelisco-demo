import { Component, ContentChild, Input } from '@angular/core';
import { OCustomContentDirective } from 'ngx-obelisco-example/directives';

@Component({
  selector: 'o-block',
  templateUrl: './o-block.component.html',
  styleUrls: ['./o-block.component.scss']
})
export class OBlockComponent {
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public isBgLight?: boolean = false;
  @Input() public isPositionRelative?: boolean = false;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;
}
