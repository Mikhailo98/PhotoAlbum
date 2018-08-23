import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from '../models/regiter-user';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, psw: string) {

    const data = "username=" + username + "&password=" + psw + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post('http://localhost:56688/Token', data, { headers: reqHeader });
  }


  register(model: RegisterUser): any {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('api/Account/Register', model);
  }


}
