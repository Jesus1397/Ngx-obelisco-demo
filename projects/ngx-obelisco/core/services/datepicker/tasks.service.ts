import { DatePickerItem } from '@gcba/ngx-obelisco/core/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public task$ = new BehaviorSubject<DatePickerItem[]>([]);
}
