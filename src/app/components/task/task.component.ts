import { Component } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  listOpened = true;

  showlist() {
    this.listOpened = !this.listOpened;
  }

}
