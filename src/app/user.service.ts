import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://57.128.17.195:3000/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getNameByUser(name: string): Observable<boolean> {
    const url = `${this.apiUrl}/${name}`
    return this.http.get(url).pipe(
      map(data => {
        return true;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          return of(false);
        } else {
          throw err;
        }
      })
    )
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
}
