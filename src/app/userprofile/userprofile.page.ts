import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AdduserPage} from "../adduser/adduser.page";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor(private mc: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.mc.create(
      {component:AdduserPage}
    )
    return await modal.present();
  }

}
