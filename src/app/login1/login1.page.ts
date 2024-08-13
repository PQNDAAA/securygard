import { Component, OnInit} from '@angular/core';
import {User, UserService} from "../user.service";

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit{
  users: User[] | null = null;

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers(){
    this.us.getUsers().subscribe(data => this.users = data);
  }
}
