import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogin: boolean;

  get islogin(): boolean {
    if (localStorage.getItem('userToken') != null) {
      return true;
    }
    return false;
  }

  get profilePage(): string {
    if (this.islogin) {
      return localStorage.getItem('profileUrl');
    }
  }


  constructor() {
  }

}
