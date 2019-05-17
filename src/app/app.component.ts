import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mierda';

  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.isLoading = false;
  }
}
