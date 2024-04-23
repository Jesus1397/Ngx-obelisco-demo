import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  DATEPICKER_DATA_SOURCE,
  DATEPICKER_OUTPUT_DATA_SOURCE,
  DATEPICKERDATE_DATA_SOURCE,
  DATEPICKERTASK_SOURCE,
  TASK_SOURCE,
  DATEPICKERTASK_INTERFACE,
  NGBDATASTRUCT_DATA_INTERFACE,
  TASK_INTERFACE
} from 'src/app/constants/datepicker.constants';

@Component({
  selector: 'app-datepicker-api',
  templateUrl: './datepicker-api.component.html',
  styleUrls: ['./datepicker-api.component.scss']
})
export class DatepickerApiComponent {
  public columns = COLUMNS;
  public datepickerDataSource = DATEPICKER_DATA_SOURCE;
  public datepickerOutputDataSource = DATEPICKER_OUTPUT_DATA_SOURCE;

  public ngbdatastructDataSource = DATEPICKERDATE_DATA_SOURCE;
  public datepickertaskSource = DATEPICKERTASK_SOURCE;
  public taskSource = TASK_SOURCE;

  public ngbdatastructDataInterface = NGBDATASTRUCT_DATA_INTERFACE;
  public datepickertaskInterface = DATEPICKERTASK_INTERFACE;
  public taskInterface = TASK_INTERFACE;
}
