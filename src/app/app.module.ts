import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularComponent } from './angular/angular.component';
import { FuneralListComponent } from './funeral-list/funeral-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { FuneralDataComponent } from './funeral-data/funeral-data.component';

import { AppHttpInterceptor } from './app-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngularComponent,
    FuneralListComponent,
    PageNotFoundComponent,
    LoginComponent,
    DatePickerComponent,
    FuneralDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:AppHttpInterceptor , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }