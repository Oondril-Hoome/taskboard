import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task/task.model';
import {TasksService} from '../../../services/tasks.service';
import {printLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-month-calendar-component',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss']
})
export class MonthCalendarComponent implements OnInit{

  constructor(public tasksService: TasksService) { }

  @Input() tasks: Array<Task>;

  ngOnInit() {
  }
}
