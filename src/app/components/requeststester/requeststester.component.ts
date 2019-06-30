import {Component} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {User} from '../../models/user/user.model';
import {Temps} from '../../models/units/temps.model';
import {Task} from '../../models/task/task.model';

@Component({
  selector: 'requests-tester-component',
  templateUrl: './requeststester.component.html',
  styleUrls: ['./requeststester.component.scss']
})
export class RequestsTesterComponent {

  private user: User;
  constructor(private tasksService: TasksService) {
    this.user = new User();
    this.user.username = 'oondril';
    this.user.id = 0;
  }

  testPostTask() {

    const task: Task = { id: 0, title: 'Work',
      description: { textDescription: 'Normal working day', imageDescriptionURL: 'https://orleans.cesi.fr/wp-content/uploads/sites/19/2019/02/SopraSteria-Carre.png'},
      realisationTimeEstimation: new Temps(240),
      realisationTime: null, realisator: null,
      realisationRealDate: null,
      realisationRealEndDate: null,
      nbPostpown: null,
      author: {username: 'Oondril', id: 0},
      assigned: [{username: 'Oondril', id : 0}],
      categorie: {id: 0, name: 'Travail', color: '#C3809E'},
      creationDate: new Date('2019-04-16T00:00:00'),
      assignationDate: new Date('2019-04-16T00:00:00'),
      realisationWishedDate: null,
      realisationWishedEndDate: null};
    console.log('testPostTask()');
    this.tasksService.addToDoTaskToUser(this.user, task);
  }

  testGetTasks() {
    this.tasksService.getAllToDoTasksOfUser(this.user);
  }


}

