import { Component } from '@angular/core';

@Component({
  selector: 'app-headbar-component',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent {

  bouttonOn = true;

  showtaTrace() {
    this.bouttonOn = !this.bouttonOn;
  }

}
