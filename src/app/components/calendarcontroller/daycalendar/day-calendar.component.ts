import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../models/task/task.model';
import {TasksService} from '../../../services/tasks.service';
import {printLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-day-calendar-component',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit{

  constructor(public tasksService: TasksService) { }

  @Input() tasks: Array<Task>;
  printLines;

  ngOnInit() {
  }
}
