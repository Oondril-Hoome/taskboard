import {Component, Input} from '@angular/core';
import {Task} from '../../models/task/task.model';

@Component({
  selector: 'app-day-calendar-component',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent {

  @Input() tasks: Array<Task>;

}
