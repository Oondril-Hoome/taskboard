import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TaskComponent} from './components/task/task.component';
import {LoadingComponent} from './components/loading/loading.component';
import {HeadbarComponent} from './components/headbar/headbar.component';
import {DayCalendarComponent} from './components/daycalendar/day-calendar.component';
import {CalendarControllerComponent} from './components/calendarcontroller/calendar-controller.component';
import {SwitchBarComponent} from './components/switchbar/switch-bar.component';

import { LoadingService } from './services/loading.service';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, NativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TasksService} from './services/tasks.service';
import {ApiService} from './services/api.service';
import {RequestsTesterComponent} from './components/requeststester/requeststester.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DayCalendarComponent,
    CalendarControllerComponent,
    HeadbarComponent,
    LoadingComponent,
    SwitchBarComponent,
    RequestsTesterComponent
    ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    NativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoadingService, TasksService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
