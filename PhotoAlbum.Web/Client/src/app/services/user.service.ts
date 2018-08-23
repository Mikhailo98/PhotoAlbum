import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UserProfile, UserPlain } from '../models/profile';
import { UpdateUser } from '../models/update-user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })


export class UserService {
  UpdateUserProfile(user: UpdateUser): Observable<Response> {
    const token = "Bearer " + localStorage.getItem('userToken');
    const myHeaders = new HttpHeaders().set('Authorization', token);

    const id = user.Id;
    return this.http.patch<Response>(`api/users/${id}/profile/info`, user, { headers: myHeaders })
  }


  UpdateAvatar(userId: string, formdata: FormData): Observable<Response> {
    const token = "Bearer " + localStorage.getItem('userToken');
    const myHeaders = new HttpHeaders().set('Authorization', token);

    return this.http.patch<Response>(`api/users/${userId}/profile/avatar`, formdata,
      { headers: myHeaders });

  }


  GetUserProfileInfoToUpdate(username: string): Observable<UpdateUser> {
    return this.http.get<UpdateUser>(`api/users/username/${username}/profile/info`);
  }


  constructor(
    private http: HttpClient) { }


  // GET Boolean if user with such Username exists
  checkUserExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`api/users/${username}/check`);
  }



  getUserProfile(username: string, PageIndex: number): Observable<UserProfile> {

    const token = "Bearer " + localStorage.getItem('userToken');
    const myHeaders = new HttpHeaders().set('Authorization', token);

    return this.http.get<UserProfile>(`/api/users/name/${username}/profile/?PageIndex=${PageIndex}`, { headers: myHeaders });

  } 
}
