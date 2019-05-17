import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskComponent} from './components/task/task.component';
import {TasklistComponent} from './components/tasklist/tasklist.component';
import {HeadbarComponent} from './components/headbar/headbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasklistComponent,
    HeadbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
