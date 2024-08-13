import { Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit{
  users: any[] = [];

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.us.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
