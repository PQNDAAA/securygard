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

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.us.getUsers().subscribe(data => this.users = data);
  }
  addUser(){
    this.us.addUser(this.newUser).subscribe(() => this.getUsers());
  }

}
