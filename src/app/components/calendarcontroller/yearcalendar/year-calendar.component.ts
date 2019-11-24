import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task/task.model';
import {TasksService} from '../../../services/tasks.service';
import {printLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-year-calendar-component',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  @Input() tasks: Array<Task>;

  ngOnInit() {
  }
}
