import {Injectable, OnInit} from '@angular/core';
import {Temps} from '../models/units/temps.model';
import {Task} from '../models/task/task.model';
import {User} from '../models/user/user.model';
import {ApiService} from './api.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService implements OnInit {

  constructor(private apiService: ApiService) { }

  //private userTasks: [Task];
  private _currentPrintedTasks: Subject<any> = new Subject();
  public currentPrintedTasks: Observable<Task[]> = this._currentPrintedTasks.asObservable();

  ngOnInit(): void {
    this.getAllToDoTasksOfUser(new User('oondril'));
  }

  userTasks = [
    { id: 0, title: 'Work',
      description: { textDescription: 'Normal working day', imageDescriptionURL: 'https://orleans.cesi.fr/wp-content/uploads/sites/19/2019/02/SopraSteria-Carre.png'},
      realisationTimeEstimation: new Temps(240),
      author: {username: 'Oondril'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Travail', color: '#C3809E'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(8),
      realisationWishedEndDate: new Date().setHours(10)},
    { id: 1, title: 'See @SamSam',
      description: { textDescription: 'RDV 18h plage'},
      realisationTimeEstimation: new Temps(60),
      author: {username: 'Oondril'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Sortie', color: '#41B3A3'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(18),
      realisationWishedEndDate: new Date().setHours(19)},
    { id: 2, title: 'Clean the floor of the flat',
      realisationTimeEstimation: new Temps(15),
      author: {username: 'SamSam'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Maison', color: '#E8A87C'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(20),
      realisationWishedEndDate: new Date().setHours(21)},
    { id: 3, title: 'Clean the floor of the flat',
      realisationTimeEstimation: new Temps(15),
      author: {username: 'SamSam'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Maison', color: '#E27D60'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(21),
      realisationWishedEndDate: new Date().setHours(22)},
    { id: 4, title: 'Clean the floor of the flat',
      realisationTimeEstimation: new Temps(15),
      author: {username: 'SamSam'},
      assigned: {username: 'Oondril'},
      categorie: {name: 'Maison', color: '#80CCC8'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: Date,
      realisationWishedDate: new Date().setHours(23),
      realisationWishedEndDate: new Date().setHours(24)}
  ];

  getAllToDoTasksOfUser(user: User) {
    this.apiService.getAllToDoTasksOfUser(user).subscribe( res => {
      console.log('the task get succeeded');
      this.userTasks = res[0].userData.taskboardData.toDoTasks;
    }, err => {
      console.log(err);
    });
  }

  addToDoTaskToUser(user: User, task: Task) {
    this.apiService.addToDoTaskToUser(user, task).subscribe( res => {
      console.log('the task post succeeded');
      //get tasks after add
      this.getAllToDoTasksOfUser(user);
    }, err => {
      console.log(err);
    });
  }

  removeToDoTaskToUser(user: User, taskToRemove: Task) {
    this.apiService.removeToDoTaskToUser(user, taskToRemove).subscribe(res => {
      console.log('the task delete succeeded');
      //get tasks after delete
      this.getAllToDoTasksOfUser(user);
    }, err => {
      console.log(err);
    });
  }

}
