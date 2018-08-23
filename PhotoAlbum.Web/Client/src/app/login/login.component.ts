import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { ListImagesComponent } from '../list-images/list-images.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  model: any = {};
  isFromlike: boolean = false;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router, ) {
    router.events.forEach((event) => {
      {
        this.isFromlike = true;
      }
    })

  }

  ngOnInit() {
  }


  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe((data: any) => {
        localStorage.setItem('userToken', data.access_token);
        localStorage.setItem('profileUrl', this.model.username);

        this.router.navigate(['']);
      },
        (err: HttpErrorResponse) => {
          // this.isLoginError = true;
          alert("Invalid userid or password")
        });

  }
}
