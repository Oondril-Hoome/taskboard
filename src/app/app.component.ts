import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.isLoading = false;
  }

  testLoading() {
    this.loadingService.isLoading = !this.loadingService.isLoading;
  }
}
