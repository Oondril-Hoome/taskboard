import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task/task.model';
import {TasksService} from '../../../services/tasks.service';
import {printLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-week-calendar-component',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  @Input() tasks: Array<Task>;

  ngOnInit() {
  }
}
