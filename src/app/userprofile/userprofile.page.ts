import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AdduserPage} from "../adduser/adduser.page";
import {User, UserService} from "../user.service";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor(private mc: ModalController, protected us : UserService) { }

  user: User | null = null;

  ngOnInit() {
    this.user = this.us.connectedUser;
    console.log("L'utilisateur connecté est: ",this.user);
  }

  async openModal(){
    const modal = await this.mc.create(
      {component:AdduserPage}
    )
    return await modal.present();
  }

}
