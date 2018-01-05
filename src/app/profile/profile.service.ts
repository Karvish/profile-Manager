import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import  {Profile} from './profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProfileService {
   private profilesUrl = 'https://api.mlab.com/api/1/databases/profile-manager/collections/profiles' // URL to web api
   private myApiKey = 'vtoACmTcBmcns7iac5wmCO25VcyuEgHX'
   private fullUrl = this.profilesUrl + '?apiKey=' + this.myApiKey



  constructor(private _http:HttpClient) { }

//Get All Profiles
  getProfiles(): Observable<Profile[]> {
    return this._http
      .get<Profile[]>(this.fullUrl).pipe()
     
  }


  /** GET Profile by id. Will 404 if id not found */
  getProfile(id: any): Observable<Profile> {

    const url = `${this.profilesUrl}/${id}?apiKey=${this.myApiKey}`;
    return this._http.get<Profile>(url).pipe();
  }

  

}
