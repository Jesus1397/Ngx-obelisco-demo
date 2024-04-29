import { Component, OnInit } from '@angular/core';
import { DatePickerTask, DatepickerDate } from 'ngx-obelisco-example/core/models';
import { TasksService } from 'ngx-obelisco-example/core/services';
import {
  DATEPICKER_EXAMPLE,
  DATEPICKER_EXAMPLE_POPUP,
  DATEPICKER_EXAMPLE_WEEK_FIRSTDAY,
  DATEPICKER_EXAMPLE_OTHERSDAY
} from 'src/app/constants/datepicker.constants';

@Component({
  selector: 'app-datepicker-examples',
  templateUrl: './datepicker-examples.component.html',
  styleUrls: ['./datepicker-examples.component.scss']
})
export class DatepickerExamplesComponent implements OnInit {
  public datepickerExample = DATEPICKER_EXAMPLE;
  public datepickerExamplePopup = DATEPICKER_EXAMPLE_POPUP;
  public datepickerExampleWeekFirstday = DATEPICKER_EXAMPLE_WEEK_FIRSTDAY;
  public datepickerExampleOthersday = DATEPICKER_EXAMPLE_OTHERSDAY;

  currentDate: Date = new Date();
  public selectedDate!: DatepickerDate;
  public selectedTasks: DatePickerTask[] = [];

  constructor(private readonly taskService: TasksService) {}

  ngOnInit(): void {
    this.selectedDate = {
      year: this.currentDate.getFullYear(),
      month: this.currentDate.getMonth() + 1,
      day: this.currentDate.getDate()
    };

    const tasks = [
      {
        date: { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: 2 },
        task: [{ title: 'Evento 1' }, { title: 'Evento 2' }, { title: 'Evento 3' }, { title: 'Evento 4' }]
      },
      {
        date: { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: 13 },
        task: [{ title: 'Evento 1' }, { title: 'Evento 2' }, { title: 'Evento 3' }, { title: 'Evento 4' }]
      },
      {
        date: { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: 21 },
        task: [{ title: 'Evento 1' }, { title: 'Evento 2' }, { title: 'Evento 3' }, { title: 'Evento 4' }]
      }
    ];

    this.taskService.task$.next(tasks);
  }

  onDateSelected(date: DatepickerDate) {
    this.selectedDate = date;
  }

  onTaskSelected(tasks: DatePickerTask[]) {
    this.selectedTasks = tasks;
  }

  public datepickerExampleTs = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public selectedDate!: DatepickerDate;
    public selectedTasks: DatePickerTask[] = [];
    public currentDate: Date = new Date();

    constructor(private readonly taskService: TasksService) {}

    ngOnInit(): void {
      this.selectedDate = {
        year: this.currentDate.getFullYear(),
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate()
      };

      const tasks = [
        {
          date: { year: ${this.currentDate.getFullYear()}, month: ${this.currentDate.getMonth() + 1}, day: 2 },
          task: [
            { title: 'Evento 1' },
            { title: 'Evento 2' },
            { title: 'Evento 3' },
            { title: 'Evento 4' },
          ]
        },
        {
          date: { year: ${this.currentDate.getFullYear()}, month: ${this.currentDate.getMonth() + 1}, day: 13 },
          task: [
            { title: 'Evento 1' },
            { title: 'Evento 2' },
            { title: 'Evento 3' },
            { title: 'Evento 4' },
          ]
        },
        {
          date: { year: ${this.currentDate.getFullYear()}, month: ${this.currentDate.getMonth() + 1}, day: 21 },
          task: [
            { title: 'Evento 1' },
            { title: 'Evento 2' },
            { title: 'Evento 3' },
            { title: 'Evento 4' },
          ]
        }
      ];

      this.taskService.task$.next(tasks);
    }

    onDateSelected(date: DatepickerDate) {
      this.selectedDate = date;
    }

    onTaskSelected(tasks: DatePickerTask[]) {
      this.selectedTasks = tasks;
    }
  }
`;

  public disabledDates = [
    {
      year: 2024,
      month: 3,
      day: 2
    },
    {
      year: 2024,
      month: 3,
      day: 3
    },
    {
      year: 2024,
      month: 3,
      day: 4
    },
    {
      year: 2024,
      month: 3,
      day: 5
    }
  ];
}
