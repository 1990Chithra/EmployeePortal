import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CalenderComponent } from './calender/calender.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    CalenderComponent,
    PieChartComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HighchartsChartModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
