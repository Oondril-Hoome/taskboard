import {TaskDescription} from './task-description.model';
import {User} from '../user/user.model';
import {Temps} from '../units/temps.model';
import {TaskCategorie} from './task-categorie.model';

export class Task {
  id: number;
  title: string;
  description: TaskDescription;
  categorie: TaskCategorie;

  realisationTimeEstimation: Temps;
  realisationTime: Temps;

  author: User;
  assigned: Array<User>;
  realisator: Array<User>;

  creationDate: Date;
  assignationDate: Date;
  realisationWishedDate: Date;
  realisationWishedEndDate: Date;
  realisationRealDate: Date;
  realisationRealEndDate: Date;

  nbPostpown: number;
}

export interface TaskModel {
  id: number;
  title: string;
  description: TaskDescription;
  categorie: TaskCategorie;

  realisationTimeEstimation: Temps;
  realisationTime: Temps;

  author: User;
  assigned: Array<User>;
  realisator: Array<User>;

  creationDate: Date;
  assignationDate: Date;
  realisationWishedDate: Date;
  realisationWishedEndDate: Date;
  realisationRealDate: Date;
  realisationRealEndDate: Date;

  nbPostpown: number;
}
