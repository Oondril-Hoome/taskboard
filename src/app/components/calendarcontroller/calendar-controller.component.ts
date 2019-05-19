import {Component} from '@angular/core';
import {SwitchOption} from '../../models/switchoption/switch-option.model';
import {TaskDescription} from '../../models/task/task-description.model';
import {Temps} from '../../models/units/temps.model';
import {User} from '../../models/user/user.model';
import {FormControl} from '@angular/forms';
import {MAT_DATE_FORMATS} from '@angular/material';

import * as moment from 'moment';

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

  switchBarOptions: Array<SwitchOption> = [
    {text : 'Day', isSelected : true},
    {text: 'Week', isSelected : false},
    {text: 'Month', isSelected : false},
    {text: 'Year', isSelected : false},
  ];

  selectedDayTasks = [
    { id: 0, title: 'Work',
      description: { textDescription: 'Normal working day', imageDescriptionURL: 'https://orleans.cesi.fr/wp-content/uploads/sites/19/2019/02/SopraSteria-Carre.png'},
      realisationTimeEstimation: new Temps(240),
      author: {username: 'Oondril'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Travail', color: '#6088e0'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(8)},
    { id: 1, title: 'See @SamSam',
      description: { textDescription: 'RDV 18h plage'},
      realisationTimeEstimation: new Temps(60),
      author: {username: 'Oondril'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Sortie', color: '#a976fc'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(18)},
    { id: 2, title: 'Clean the floor of the flat',
      realisationTimeEstimation: new Temps(15),
      author: {username: 'SamSam'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Maison', color: '#fca276'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(20)},
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
