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

/** POST: Add a new Profile to the server */
addProfile (profile: Profile): Observable<Profile> {
  return this._http.post<Profile>(this.fullUrl, profile, httpOptions).pipe();
}


  /** PUT: Update the Profile on the server */
  updateProfile (profile: Profile, id: any): Observable<any> {
     const url = `${this.profilesUrl}/${id}?apiKey=${this.myApiKey}`;
    return this._http.put(url, profile, httpOptions).pipe();
  }


/** DELETE: delete the hero from the server */
deleteProfile (profile: Profile, id: any): Observable<any> {
 const url = `${this.profilesUrl}/${id}?apiKey=${this.myApiKey}`;
   return this._http.delete<Profile>(url, httpOptions).pipe();
}



    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
