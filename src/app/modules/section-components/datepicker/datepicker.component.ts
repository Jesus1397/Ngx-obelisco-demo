import { Component } from '@angular/core';
import { DATEPICKER_NAVIGATION } from 'src/app/constants/datepicker.constants';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public navigation = DATEPICKER_NAVIGATION;
}
