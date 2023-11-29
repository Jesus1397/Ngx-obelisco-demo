import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-panel-small',
  templateUrl: './o-panel-small.component.html',
  styleUrls: ['./o-panel-small.component.scss']
})
export class OPanelSmallComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public imageURL!: string;
  @Input() public imageAlt: string = 'descripción alternativa';
  @Input() public imageLg: boolean = false;
  @Input() public isBgWhite: boolean = false;
  @Input() public isBgLight: boolean = false;
  @Input() public isVertical: boolean = false;
  @Input() public isItemsListVertical: boolean = false;
}
