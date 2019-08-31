import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user/user.model';
import {TaskModel, Task} from '../models/task/task.model';
import {Normalizer} from '../utils/normalizer';

@Injectable()
export class ApiService {

  protected url: string;
  protected headers;

  constructor(protected http: HttpClient) {
    this.url = 'http://' + environment.apiURL + ':' + environment.apiPORT + '/api';
    this.http = http;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
  }

  getAllToDoTasksOfUser(user: User): Observable<any> {
    console.log(this.url + '/' + user.username + '/taskboard/todotasks');
    return this.http.get(this.url + '/' + user.username + '/taskboard/todotasks')
      .pipe(map((res: TaskModel[]) => {
        console.log(res);
        return res;
      }));
  }

  addToDoTaskToUser(user: User, task: Task) {
    const body = JSON.stringify({ task });
    return this.http.post(this.url + '/' + user.username +  '/taskboard/todotasks',
      Normalizer.serializeHttpParams('task', body) , {
        headers: this.headers
      });
  }

  removeToDoTaskToUser(user: User, task: Task){
    const taskId = task.id;
    return this.http.delete(this.url + '/' + user.username +  '/taskboard/todotasks/' + taskId,
    {
        headers: this.headers
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
