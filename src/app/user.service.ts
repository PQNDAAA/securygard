import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://192.168.0.26:3000/users'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.apiURL);
  }
  addUser(user: any):Observable<any>{
    return this.http.post(this.apiURL,user);
  }
}
