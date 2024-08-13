import { Component, OnInit} from '@angular/core';
import {User, UserService} from "../user.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit{

  constructor(private us: UserService, private nc: NavController) { }
  currentUser: User | null = null;

  textAreaUser!: string;
  textAreaPassword!: string;

  userExists!: boolean;
  passwordExists!: boolean;

  loginMessage!: string;

  ngOnInit() {
    this.us.fetchUsers();
  }

  checkUserByUsername(username: any) : boolean {
    let nameFound = false;
    const foundUser = this.us.searchUserByName(username, 'name')
       if (foundUser) {
        this.currentUser = foundUser;
        nameFound = true;
      } else {
        this.currentUser = null;
    }
    this.userExists = nameFound;
    return nameFound;
  }

  checkPasswordByName(password: any) : boolean {
    let passwordIsValid = false;
    const currentPassword = this.currentUser?.password;
    console.log(password);

      if (currentPassword === password) {
        console.log("Le mot de passe est correct");
        passwordIsValid = true;
      } else {
        console.log("Le mot de passe n'est pas correct");
    }
    this.passwordExists = passwordIsValid;
    return passwordIsValid;
  }
  onInputChangeUsername(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const username = inputElement.value;
    this.checkUserByUsername(username);
  }

  onInputChangePassword(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const password = inputElement.value;
    this.checkPasswordByName(password);
  }

  checkLogin() : boolean{
    if(!this.userExists || !this.passwordExists){
      this.loginMessage = 'Vos informations ne sont pas correctes';
      return false;
    } else {
      this.loginMessage = 'Vos informations sont correctes';
      this.us.connectedUser = this.currentUser;
      this.nc.navigateForward('/home');
      return true;
    }
  }
}
