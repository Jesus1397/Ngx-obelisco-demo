import { Component, ContentChild, Input } from '@angular/core';
import { OCustomContentDirective } from 'ngx-obelisco-example/directives';
import { ModalSizes } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'o-modal',
  templateUrl: './o-modal.component.html',
  styleUrls: ['./o-modal.component.scss']
})
export class OModalComponent {
  @Input() public id!: string;
  @Input() public dataTarget!: string;
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public description!: string;
  @Input() public isBordered: boolean = false;
  @Input() public size: ModalSizes = 'sm';
  @Input() public isScrollable: boolean = false;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true }) oCustomContent?: OCustomContentDirective;
}
