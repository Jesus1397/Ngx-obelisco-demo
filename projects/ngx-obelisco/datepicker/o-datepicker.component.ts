import { Component, EventEmitter, Injectable, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbDatepickerI18n, NgbCalendar, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '@gcba/ngx-obelisco/core/services';
import { I18N_VALUES } from './i18n.constans';
import { Subject, takeUntil } from 'rxjs';
import { DatePickerTask, DatepickerDate } from '@gcba/ngx-obelisco/core/models';

const NOW = new Date();

@Injectable()
export class I18n {
  language = 'ar';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayLabel(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  override getWeekLabel(): string {
    return I18N_VALUES[this._i18n.language].weekLabel;
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: DatepickerDate): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'o-datepicker',
  templateUrl: './o-datepicker.component.html',
  styleUrls: ['./o-datepicker.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class ODatepickerComponent implements OnInit, OnDestroy {
  @Input() public isPopUp: boolean = false;
  @Input() public firstDayOfWeek: number = 7;
  @Input() public outsideDays: 'visible' | 'hidden' = 'hidden';
  @Input() public minDate: DatepickerDate = { year: new Date().getFullYear(), month: 1, day: 1 };
  @Input() public maxDate: DatepickerDate = { year: new Date().getFullYear() + 5, month: 12, day: 31 };
  @Input() public startDate: DatepickerDate = {
    year: NOW.getFullYear(),
    month: NOW.getMonth() + 1,
    day: NOW.getDate()
  };
  @Input() public disabledWeekends: boolean = false;
  @Input() public disabledDates: DatepickerDate[] = [];

  @Output() public dateSelected: EventEmitter<DatepickerDate> = new EventEmitter<DatepickerDate>();
  @Output() public taskSelected: EventEmitter<DatePickerTask[]> = new EventEmitter<DatePickerTask[]>();

  model: DatepickerDate = { year: NOW.getFullYear(), month: NOW.getMonth() + 1, day: NOW.getDate() };
  private onDestroy$ = new Subject<void>();

  constructor(private calendar: NgbCalendar, private taskService: TasksService) {}

  ngOnInit() {
    if (!this.startDate) {
      this.startDate = {
        year: NOW.getFullYear(),
        month: NOW.getMonth() + 1,
        day: NOW.getDate()
      };
    }
    this.model = this.startDate;
  }

  selectToday() {
    this.model = {
      year: NOW.getFullYear(),
      month: NOW.getMonth() + 1,
      day: NOW.getDate()
    };
  }

  isWeekend(date: DatepickerDate) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: DatepickerDate, current: { month: number }) {
    if (this.disabledWeekends && this.isWeekend(date)) {
      return true;
    }

    return date.month !== current.month || this.isDateDisabled(date);
  }

  isDateDisabled(date: DatepickerDate): boolean {
    return this.disabledDates.some(
      (disabledDate) =>
        disabledDate.year === date.year && disabledDate.month === date.month && disabledDate.day === date.day
    );
  }

  hasTask(date: DatepickerDate) {
    return this.dateHasTask(date);
  }

  showTasks(date: DatepickerDate, event: MouseEvent) {
    if (this.isDateDisabled(date) || (this.disabledWeekends && this.isWeekend(date))) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.taskService.task$.value.filter((task) => {
      const taskDate = task.date ? new Date(task.date.year, task.date.month - 1, task.date.day) : new Date();
      return (
        taskDate.getDate() === date.day &&
        taskDate.getMonth() + 1 === date.month &&
        taskDate.getFullYear() === date.year
      );
    });
  }

  dateHasTask(date: DatepickerDate) {
    return this.taskService.task$.value.some((task) => {
      const taskDate = task.date ? new Date(task.date.year, task.date.month - 1, task.date.day) : new Date();
      return (
        taskDate.getDate() === date.day &&
        taskDate.getMonth() + 1 === date.month &&
        taskDate.getFullYear() === date.year
      );
    });
  }

  gettaskSelected(selectedDate: DatepickerDate): DatePickerTask[] {
    let taskOfDate: DatePickerTask[] = [];
    this.taskService.task$.pipe(takeUntil(this.onDestroy$)).subscribe((tasks) => {
      tasks.forEach((task) => {
        const taskDate = new Date(task.date!.year, task.date!.month - 1, task.date!.day);
        if (
          taskDate.getDate() === selectedDate.day &&
          taskDate.getMonth() + 1 === selectedDate.month &&
          taskDate.getFullYear() === selectedDate.year
        ) {
          taskOfDate = task.task ? task.task : [];
        }
      });
    });

    return taskOfDate;
  }

  onDateChange(newDate: DatepickerDate) {
    if (this.disabledWeekends && this.isWeekend(newDate)) {
      return;
    }

    this.dateSelected.emit(newDate);
    const tasks = this.gettaskSelected(newDate);
    this.taskSelected.emit(tasks);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
