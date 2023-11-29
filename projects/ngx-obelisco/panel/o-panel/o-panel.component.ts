import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-panel',
  templateUrl: './o-panel.component.html',
  styleUrls: ['./o-panel.component.scss']
})
export class OPanelComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public imageURL!: string;
  @Input() public imageAlt: string = 'Texto alternativo';
  @Input() public videoURL!: string;
  @Input() public isVertical: boolean = false;
  @Input() public isBgWhite: boolean = false;
  @Input() public isBgLight: boolean = false;
}
