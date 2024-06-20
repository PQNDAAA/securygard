import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  constructor(private mc: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    return this.mc.dismiss();
  }

}
