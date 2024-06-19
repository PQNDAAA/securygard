import { Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit{

  constructor(private us: UserService) { }
  users: any = [];
  newUser = {};

  textAreaUser!: string;
  textAreaPassword!: string;


  userExists!: boolean;
  errorLoginMessage!: string;

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.us.getUsers().subscribe(data =>
      this.users = data);
  }
  addUser(){
    this.us.addUser(this.newUser).subscribe(() =>
      this.getUsers());
  }
  checkUserByUsername(username: string){
    this.us.getUserByUsername(username).subscribe(exists => {
      this.userExists = exists;
    },
      error => {
      console.error("Cet utilisateur n'existe pas",error);
      this.userExists = false;
      }
    );
  }


  onInputChangeUsername(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const username = inputElement.value;
    this.checkUserByUsername(username);
  }
  checkLogin(){
    if(!this.userExists){
      this.errorLoginMessage = 'Vos informations ne sont pas correctes';
    } else {
      this.errorLoginMessage = 'Vos informations sont correctes';
    }
  }
}
