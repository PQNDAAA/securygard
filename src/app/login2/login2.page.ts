import { Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit{

  constructor(private us: UserService) { }
  users: any[] = [];
  newUser = {};

  textAreaUser!: string;
  textAreaPassword!: string;

  userExists!: boolean;
  passwordExists!: boolean;
  errorLoginMessage!: string;

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.us.getUsers().subscribe(data => {
      this.users = data;
      for(let i = 0; i < this.users.length; i ++){
        console.log(this.users[i]);
      }
    });
  }
  addUser(){
    this.us.addUser(this.newUser).subscribe(() =>
      this.getUsers());
  }

  checkUserByUsername(username: any) : boolean {
    let nameFound = false;
    for(let i = 0; i < this.users.length; i ++) {
      console.log(this.users[i].name);
      if(this.users[i].name === username) {
        console.log("Cet utilisateur existe.");
        nameFound = true;
        this.userExists = nameFound;
        return nameFound;
      }
    }
    console.log("Cet utilisateur n'existe pas.");
    this.userExists = nameFound;
    return nameFound;
  }
  onInputChangeUsername(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const username = inputElement.value;
    this.checkUserByUsername(username);
  }

  onInputChangePassword(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const password = inputElement.value;
    this.checkUserByUsername(password);
  }

  checkLogin(){
    if(!this.userExists || !this.passwordExists){
      this.errorLoginMessage = 'Vos informations ne sont pas correctes';
    } else {
      this.errorLoginMessage = 'Vos informations sont correctes';
    }
  }
}
