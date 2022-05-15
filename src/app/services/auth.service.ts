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

public get isAuth(): boolean {
    return localStorage.getItem("isAuth")=='true'?true:false;
 }
public set isAuth(value: boolean) {
    localStorage.setItem('isAuth',value==true?'true':'false');
}
  

  login(info:any){
    console.log('login');
    return this.http.post( this.settings.ApiBaseUrl +  '/auth/login' ,info,{observe:'body',responseType:'json'});
  }

  logout(){
    console.log('logout');
    return this.http.get( this.settings.ApiBaseUrl +  '/auth/logout' ,{observe:'body',responseType:'json'});
  }
}
