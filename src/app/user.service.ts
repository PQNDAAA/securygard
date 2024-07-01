import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://57.128.17.195/securygard-app/api/v1';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/users.php`);
  }

  addUser(user: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/users.php`, user);
  }
  getUserByUsername(username:string):Observable<boolean>{
    const url = `${this.apiUrl}/${username}`
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
