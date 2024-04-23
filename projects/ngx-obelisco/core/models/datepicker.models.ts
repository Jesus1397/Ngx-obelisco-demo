import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface DatePickerItem {
  id?: string;
  date?: DatepickerDate;
  task?: DatePickerTask[];
}

export interface DatePickerTask {
  title?: string;
  type?: string;
}

export interface DatepickerDate extends NgbDateStruct {}
