import { Component, Input } from '@angular/core';
import { MediaPanel, MediaSizes } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-panel-small',
  templateUrl: './o-panel-small.component.html',
  styleUrls: ['./o-panel-small.component.scss']
})
export class OPanelSmallComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public image!: MediaPanel;
  @Input() public isBgWhite: boolean = false;
  @Input() public isBgLight: boolean = false;
  @Input() public isVertical: boolean = false;
  @Input() public isItemsListVertical: boolean = false;
  @Input() public customClasses: string = '';

  sizeToPx = (size: MediaSizes): number => {
    switch (size) {
      case 'lg':
        return 154;
      case 'md':
        return 104;
      case 'sm':
        return 104;
    }
  };
}
