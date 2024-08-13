import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://57.128.17.195:3000/api/users';

  public connectedUser : User | null = null;
  private users : User[] | null = null;

  constructor(private http: HttpClient) {
  }

  fetchUsers() {
    this.http.get<User[]>(`${this.apiUrl}`).subscribe(data =>  {
      this.users = data;
      if(this.users){
        for(let i = 0; i < this.users.length; i ++) {
          console.log(this.users[i]);
        }
      }
    });
  }
  getUsers(): Observable<User[] | null> {
    return this.http.get<User[]>(`${this.apiUrl}`);
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

  searchUserByName(parameter : any,searchparameter : keyof User) : User | undefined{
    const user = this.users?.find(user => user[searchparameter] === parameter);

    if(user){
      console.log("Cet utilisateur existe: ", parameter);
      return user;
    }
    console.error("Cet utilisateur n'existe pas.");
    return user;
  }

  clearUser(){
    this.connectedUser = null;
  }
}
