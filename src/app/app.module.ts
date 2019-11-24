import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TaskComponent} from './components/task/task.component';
import {LoadingComponent} from './components/loading/loading.component';
import {HeadbarComponent} from './components/headbar/headbar.component';
import {DayCalendarComponent} from './components/calendarcontroller/daycalendar/day-calendar.component';
import {CalendarControllerComponent} from './components/calendarcontroller/calendar-controller.component';
import {SwitchBarComponent} from './components/switchbar/switch-bar.component';

import { LoadingService } from './services/loading.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, NativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TasksService} from './services/tasks.service';
import {ApiService} from './services/api.service';
import {RequestsTesterComponent} from './components/requeststester/requeststester.component';
import {DialogOverviewExample} from './components/requeststester/login.component';
import {DialogOverviewExampleDialog} from './components/requeststester/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PopupComponent} from './components/popup/popup.component';
import {MonthCalendarComponent} from './components/calendarcontroller/monthcalendar/month-calendar.component';
import {WeekCalendarComponent} from './components/calendarcontroller/weekcalendar/week-calendar.component';
import {YearCalendarComponent} from './components/calendarcontroller/yearcalendar/year-calendar.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalendarControllerComponent,
    DayCalendarComponent,
    WeekCalendarComponent,
    MonthCalendarComponent,
    YearCalendarComponent,
    HeadbarComponent,
    LoadingComponent,
    SwitchBarComponent,
    RequestsTesterComponent,
    PopupComponent,
    RequestsTesterComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog
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
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [LoadingService, TasksService, ApiService],
  bootstrap: [AppComponent],
  schemas : [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
