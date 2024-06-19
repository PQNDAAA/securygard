import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://172.20.10.13:3000/users'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.apiURL);
  }
  addUser(user: any):Observable<any>{
    return this.http.post(this.apiURL,user);
  }
  getUserByUsername(username:string):Observable<boolean>{
    const url = `${this.apiURL}/${username}`
    return this.http.get(url).pipe(
      map(response => {
        return true;
      }),
      catchError((error : HttpErrorResponse) => {
        if(error.status === 404){
          return of(false);
        } else {
          throw error;
        }
      })
    );
  }
}
