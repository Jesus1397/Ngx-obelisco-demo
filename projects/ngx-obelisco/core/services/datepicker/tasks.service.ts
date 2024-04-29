import { DatePickerItem } from 'ngx-obelisco-example/core/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public task$ = new BehaviorSubject<DatePickerItem[]>([]);
}
