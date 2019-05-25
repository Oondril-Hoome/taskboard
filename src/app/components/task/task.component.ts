import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../models/task/task.model';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  @Input() task: Task;

  //TODO : find a way to catch default task color from style.css
  taskColor = '#ffffff';
  taskBorder = 'solid 2px #ffffff';
  isToggled = false;

  constructor(private tasksService: TasksService) { }

  isOK = true;

  ngOnInit() {
    if (this.task.categorie.color) {
      this.taskColor = this.task.categorie.color;
      this.taskBorder = 'solid 2px ' + this.taskColor;
    }
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  trash() {
    this.tasksService.removeTask(this.task);
  }

}
