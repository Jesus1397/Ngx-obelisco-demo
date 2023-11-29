import { Component } from '@angular/core';
import { TOOLTIP_LIST } from 'src/app/constants/tooltip.constants';

@Component({
  selector: 'app-tooltip-examples',
  templateUrl: './tooltip-examples.component.html',
  styleUrls: ['./tooltip-examples.component.scss']
})
export class TooltipExamplesComponent {
  public tooltipList = TOOLTIP_LIST;
}
