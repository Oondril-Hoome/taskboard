import {Injectable} from '@angular/core';
import {Temps} from '../models/units/temps.model';
import {Task} from '../models/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  constructor() { }

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

  removeTask(taskToRemove:Task) {
    //local remove
    this.userTasks = this.userTasks.filter(task => task.id !== taskToRemove.id);
  }

}
