import {Component} from '@angular/core';
import {SwitchOption} from '../../models/switchoption/switch-option.model';
import {TaskDescription} from '../../models/task/task-description.model';
import {Temps} from '../../models/units/temps.model';
import {User} from '../../models/user/user.model';
import {FormControl} from '@angular/forms';
import {MAT_DATE_FORMATS} from '@angular/material';

import * as moment from 'moment';
import {TasksService} from '../../services/tasks.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendar-controller-component',
  templateUrl: './calendar-controller.component.html',
  styleUrls: ['./calendar-controller.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class CalendarControllerComponent {

  constructor(public tasksService: TasksService) { }

  switchBarOptions: Array<SwitchOption> = [
    {text : 'Day', isSelected : true},
    {text: 'Week', isSelected : false},
    {text: 'Month', isSelected : false},
    {text: 'Year', isSelected : false},
  ];

  selectedDate: Date = new Date();
  date = new FormControl(moment());

  removeOneDay(){
    //trick a bit ugly for update the datePicker value aswell, need to create new date
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.selectedDate = new Date(this.selectedDate.toDateString());
  }

  addOneDay(){
    //trick a bit ugly for update the datePicker value aswell, need to create new date
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.selectedDate = new Date(this.selectedDate.toDateString());
  }

}
