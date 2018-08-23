import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private location:Location) {
    localStorage.removeItem('userToken'); 
    localStorage.removeItem('profileUrl');
    this.location.back();
  
  }





}
