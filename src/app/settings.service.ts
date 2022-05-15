import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _apiBaseUrl : string="http://localhost:3040" ;
  public get ApiBaseUrl() : string {
    return this._apiBaseUrl;
  }
  constructor() { }
}
