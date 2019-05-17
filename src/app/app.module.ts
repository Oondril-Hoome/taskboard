import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskComponent} from './components/task/task.component';
import {TasklistComponent} from './components/tasklist/tasklist.component';
import {LoadingComponent} from './components/loading/loading.component';
import {HeadbarComponent} from './components/headbar/headbar.component';

import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasklistComponent,
    HeadbarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
