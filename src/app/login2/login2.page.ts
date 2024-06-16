import { Component} from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page{

  constructor() { }

  textAreaUser!: string;
  textAreaPassword!: string;

}
