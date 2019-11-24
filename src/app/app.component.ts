import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isVisible = true;

  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.isLoading = false;
  }

  changePopupIsVisible(isVisibleNewValue: boolean) {
    this.isVisible = isVisibleNewValue;
  }

  testLoading() {
    this.loadingService.isLoading = !this.loadingService.isLoading;
  }
}
