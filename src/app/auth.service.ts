import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient,public settings: SettingsService) { 
    
  }

  login(info:any){
    console.log('login');
    return this.http.post( this.settings.ApiBaseUrl +  '/auth/login' ,info,{observe:'body',responseType:'json'});
  }
}
